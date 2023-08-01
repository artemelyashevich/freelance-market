import { Router } from "express"

import { loginUser, registerUser, resetPassword } from "../controller/authController.js"
import handleVAlidators from "../validations/validations.js"
import checkAuth from "../validations/checkAuth.js"
import { registerUserValidation, loginUserValidation, resetPswUserValidation } from "../validations/validations.js"

const authRouter = Router()

authRouter.post(`/register`, registerUserValidation, handleVAlidators, registerUser)
authRouter.post(`/login`, loginUserValidation, handleVAlidators, loginUser)
authRouter.put(`/reset`, resetPswUserValidation, handleVAlidators, checkAuth, resetPassword)

export default authRouter