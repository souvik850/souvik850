/* 1. Create user
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
===============================================

5. Delete User By id
mutation{
   delUser(id: "61cafe9a48820ddcd59f8589"){
       id
   }
}

*/
