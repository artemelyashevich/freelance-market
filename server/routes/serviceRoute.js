import { Router } from "express"
import handleVAlidators, { addServiceValidation } from "../validations/validations.js"
import checkAuth from "../validations/checkAuth.js"
import { createReview, findAllReviews } from "../controller/reviewController.js"

const serviceRouter = Router()

serviceRouter.post(`/service`, addServiceValidation, handleVAlidators, checkAuth, createReview)
serviceRouter.get(`/service`, findAllReviews)

export default serviceRouter