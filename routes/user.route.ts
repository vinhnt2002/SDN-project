

import express from 'express'
import { addUser, deleteUser, getAllUsers, testGetAllUser, updateUserByID } from '../controllers/user.controller'


const userRouter = express.Router()

userRouter.get("/users", testGetAllUser)

userRouter.get("/get-user/:id", getAllUsers)

userRouter.post("/add-user", addUser)

userRouter.put("/update-user/:id", updateUserByID)

userRouter.delete("/delete-user/:id", deleteUser)


export default userRouter
