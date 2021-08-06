# USERS

This is a CRUD of a table of users. The API was wrtten in TypeScript and it used NodeJS and MongoDB, frameworks Express, Mongoose and jest. It does not have authentication.

## Installation

After cloning this repository, install all dependences. 

        npm install

Make sure you have MongoDB Compass in your machine. Then create a new Schema called 'users'. Then use the command 

        npm run start

Use Postman or other app to access the api.

The command "npm run test" is going to show the unit tests of the API.

#
# API

### Description : Create a new user.
### Method: POST
### Url: http://localhost:3003/users
### Body:
    {
        "name": "name",   //string
        "email": "email@email.com",  //string
        "age": 50 //number
    }
### example:


        POST http://localhost:3000/users
        Content-Type: application/json

        {
            "name": "joao",
            "email": "joao@email.com",
            "age": 50
        }

### Response:

        {message: "user created Successfully"}
#
### Description : Update an user.
### Method: PATCH
### Url: http://localhost:3003/users/:id
### Body:
    {
        "name": "name",   //string
        "email": "email@email.com",  //string
        "age": 50 //number
    }
### example:

        PATCH http://localhost:3000/users/abc123
        Content-Type: application/json

        {
            "name": "joao",
            "email": "joao@email.com",
            "age": 50
        }

### Response:

        {message: "user updated Successfully"}
#
### Description : get an user.
### Method: GET
### Url: http://localhost:3003/users/:id

### example:

        POST http://localhost:3000/users/abc123
        Content-Type: application/json

### Response:

        [
        {
            "_id": "610d1f18fc5c452184878d85",
            "name": "joao",
            "email": "joao@joao.com",
            "age": "50",
            "id": "abc123",
            "__v": 0
        }
        ]
#
### Description : get all users.
### Method: GET
### Url: http://localhost:3003/users

### example:

        GET http://localhost:3000/users
        Content-Type: application/json

### Response:

        [
        {
            "_id": "610d1f18fc5c452184878d85",
            "name": "joao",
            "email": "joao@joao.com",
            "age": "50",
            "id": "abc123",
            "__v": 0
        },
                {
            "_id": "610d1f18fc5c452111516",
            "name": "maria",
            "email": "maria@maria.com",
            "age": "50",
            "id": "def456",
            "__v": 0
        }
        ]
#

### Description : Delete an user.
### Method: DELETE
### Url: http://localhost:3003/users/:id

### example:

        DELETE http://localhost:3000/users/abc123
        Content-Type: application/json

### Response:

        {message: "User deleted successfully"}
#