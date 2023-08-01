import { ReviewService } from "../service/reviewService.js"


const reviewService = new ReviewService()

export const createReview = async (req, res) => {
    const data = await reviewService.createReview(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}

export const findAllReviews = async (req, res) => {
    const reviews = await reviewService.findAllReviews(req.query)
    if (reviews.error) {
        return res.status(reviews.status).json({ message: reviews.error })
    }
    res.status(200).json(reviews)
}

export const findOneReview = async (req, res) => {
    const review = await reviewService.findOneReview(req.params)
    if (review.error) {
        return res.status(review.status).json({ message: review.error })
    }
    res.status(200).json(review)
}

export const editReview = async (req, res) => {
    const review = await reviewService.editReview(req.params, req.body, req.headers.authorization)
    if (review.error) {
        return res.status(review.status).json(review.error)
    }
    res.status(201).json(review)
}

export const deleteReview = async (req, res) => {
    const data = reviewService.deleteReview(req.params)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(203).json({ message: "Success" })
}