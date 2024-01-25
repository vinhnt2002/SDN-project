

import express from 'express'
import { addUser, deleteUser, testGetAllUser, updateUser } from '../controllers/user.controller'


const userRouter = express.Router()

userRouter.get("/users", testGetAllUser)

userRouter.post("/adduser", addUser)

userRouter.put("/updateUserbyId/:id", updateUser)

userRouter.delete("/deleteUserbyId/:id", deleteUser)

export default userRouter
