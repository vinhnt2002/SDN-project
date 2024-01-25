

import express from 'express'
import { addUsers, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller'


const userRouter = express.Router()

userRouter.get("/users", getAllUsers)

userRouter.post("/add-user" , addUsers)

userRouter.get("/user/:id", getUserById)

userRouter.put("/update-user/:id", updateUserById)

userRouter.delete("/delete-user/:id", deleteUserById)


export default userRouter
