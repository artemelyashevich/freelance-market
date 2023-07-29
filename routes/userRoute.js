import { Router } from "express"
import { findAllUsers, findOneUser } from "../controller/userController.js"


const userRouter = Router()

userRouter.get(`/user`, findAllUsers)
userRouter.get(`/user/:id`, findOneUser)

export default userRouter
