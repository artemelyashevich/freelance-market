import { Router } from "express"
import handleVAlidators from "../validations/validations.js"
import { addReviewValidation, editReviewValidation } from "../validations/validations.js"
import checkAuth from "../validations/checkAuth.js"
import { createReview, deleteReview, editReview, findAllReviews, findOneReview } from "../controller/reviewController.js"

const reviewRouter = Router()

reviewRouter.post(`/review`, addReviewValidation, handleVAlidators, checkAuth, createReview)
reviewRouter.get(`/review`, findAllReviews)
reviewRouter.get(`/review/:id`, findOneReview)
reviewRouter.put(`/review/:id`, editReviewValidation, handleVAlidators, checkAuth, editReview)
reviewRouter.delete(`/review/:id`, checkAuth, deleteReview)

export default reviewRouter