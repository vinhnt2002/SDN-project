# SDN-project

install package: npm i
run server : npm run dev

PORT = 8000
HOSTNAME = 'http://localhost'

ORIGIN = ["http://localhost:3000/"]


# database
NODE_ENV = development
MONGO_URL = "mongodb://127.0.0.1:27017/SDN_project"


get users http://localhost:3000/api/v1/users
add users http://localhost:3000/api/v1/add-user
    data sample to add 
        {
            "name": "vinh",
            "email": "vinh@gmail.com"
            "password" "vinh1234"
        }

get user  http://localhost:3000/api/v1/user/:id
update user  http://localhost:3000/api/v1/update-user/:id
         data sample to update 
        {
            "name": "vinh1",
            "email": "vinh1@gmail.com"
        }
delete user  http://localhost:3000/api/v1/delete-user/:id