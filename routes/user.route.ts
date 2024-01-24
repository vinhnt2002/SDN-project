

import express from 'express'
import { testCreateUser, testDeleteUser, testGetAllUser, testGetUserById, testUpdateUser } from '../controllers/user.controller'


const userRouter = express.Router()

userRouter.get("/users", testGetAllUser)

userRouter.get("/user/:id", testGetUserById)

userRouter.post("/user/create", testCreateUser)

userRouter.put("/user/update/:id", testUpdateUser)

userRouter.delete("/user/delete/:id", testDeleteUser)

export default userRouter
