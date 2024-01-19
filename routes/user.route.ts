

import express from 'express'
import { testGetAllUser } from '../controllers/user.controller'


const userRouter = express.Router()

userRouter.get("/users", testGetAllUser)



export default userRouter
