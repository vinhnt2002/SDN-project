# SDN-project

# install package: npm i

# create .env :

---

PORT = 8000
HOSTNAME = 'http://localhost'

ORIGIN = ["http://localhost:3000/"]

# database

NODE_ENV = development
MONGO_URL = "mongodb://127.0.0.1:27017/SDN_project"

---

# run project : npm run dev

#api branch tien lab 1
userRouter.get("/users", testGetAllUser)

userRouter.post("/adduser", addUser)

userRouter.put("/updateUserbyId/:id", updateUser)

userRouter.delete("/deleteUserbyId/:id", deleteUser)
