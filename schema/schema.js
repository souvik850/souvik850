const graphql = require('graphql');
const User = require('../model/user');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//Schema defines data on the Graph like object types(book type), relation between
//these object types and describes how it can reach into the graph to interact with
//the data to retrieve or mutate the data

const UserType = new GraphQLObjectType({
  name: 'User',
  //We are wrapping fields in the function as we dont want to execute this ultil
  //everything is inilized. For example below code will throw error AuthorType not
  //found if not wrapped in a function
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    age: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    user_email: { type: GraphQLString },
    user_password: { type: GraphQLString },
  }),
});

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular
//book or get a particular author.
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return User.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
  },
});

//Very similar to RootQuery helps user to add/update to the database.
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    delUser: {
      type: UserType,
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            first_name: args.first_name,
            last_name: args.last_name,
            age: args.age,
          },
          { new: true }
        );
      },
    },
    addUser: {
      type: UserType,
      args: {
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        user_name: { type: new GraphQLNonNull(GraphQLString) },
        user_email: { type: new GraphQLNonNull(GraphQLString) },
        user_password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let user_1 = new User({
          first_name: args.first_name,
          last_name: args.last_name,
          age: args.age,
          user_name: args.user_name,
          user_email: args.user_email,
          user_password: args.user_password,
        });
        return user_1.save();
      },
    },
  },
});

//Creating a new GraphQL Schema, with options query which defines query
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
