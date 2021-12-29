**Project Description** 
This is Microservice project with GraphQL, Node JS Express and MongoDB Atlas. Customer crude operations are done in this project. Project is hosted in heroku.
API URL: https://insync-api-commerce.herokuapp.com/graphql
In case of local environment, the URL is http://localhost:4000/graphql

**Project Set-up**

Step 1: run npm install after downloading the project.

Step 2: then run the command npm run start

**GraphQl Queries**

1. Create user
  mutation {
    addUser(first_name:"Souvik", last_name:"Roy", age:28, user_name:"souvik.r",user_email:"souvik.r@insync.co.in",
    user_password: "abcd.1234"){
        id
        first_name
        last_name
        age
        user_name
        user_email
        user_password
    }
} 

**Method: POST**

=====================================

2. Display All Users
{
   users{
       id
        first_name
        last_name
        age
        user_name
        user_email
        user_password
   }
}

**Method: GET**

=========================================

3. Get User By id
{
    user(id:"61cae8758ee82ddca7bf6985"){
        id
        first_name
        last_name
        age
        user_name
        user_email
        user_password
    }
}

**Method: POST**

===========================================

4. Update User By id
mutation {
    updateUser(id:"61cae8758ee82ddca7bf6985",first_name:"Anmol", last_name:"Roy", age:22){
        id
        first_name
        last_name
        age
        user_name
        user_email
        user_password
    }
}

**Method: POST**

===============================================

5. Delete User By id
mutation{
   delUser(id: "61cafe9a48820ddcd59f8589"){
       id
   }
}

**Method: POST**

