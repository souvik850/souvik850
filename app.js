const express = require('express');
const app = express();
const mongoose = require('mongoose');
var morgan = require('morgan');
const userRouter = require('./Routes/user');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

mongoose
  .connect(
    'mongodb+srv://insyncmongo:insyncmongo@cluster0.9lgjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/user', userRouter);
app.use(
  '/graphql',
  graphqlHTTP({
    //Directing express-graphql to use this schema to map out the graph
    schema,
    //Directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql: true,
  })
);

module.exports = app;
