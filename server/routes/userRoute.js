import { Router } from "express"
import checkAuth from "../validations/checkAuth.js"
import { findAllUsers, findOneUser, updateUser } from "../controller/userController.js"


const userRouter = Router()

userRouter.get(`/users`, findAllUsers)
userRouter.get(`/user`, findOneUser)
userRouter.put(`/user`, checkAuth, updateUser)

export default userRouter
