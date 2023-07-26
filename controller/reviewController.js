import Review from "../models/review.js"
import { ReviewService } from "../service/reviewService.js"

const reviewService = new ReviewService()

export const createReview = async (req, res) => {
    const data = await reviewService.createReview(req.body)
    if (data.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
}

export const findAllReviews = async (req, res) => {
    const reviews = await reviewService.findAllReviews(req.query)
    if (reviews.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(200).json(reviews)
}

export const findOneReview = async (req, res) => {
    const review = await reviewService.findOneReview(req.params)
    if (review.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(200).json(review)
}

export const editReview = async (req, res) => {
    const review = await reviewService.editReview(req.params, req.body)
    if (review.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(201).json({ message: "Success" })

}

export const deleteReview = async (req, res) => {
    const data = reviewService.deleteReview(req.params)
    if (data.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(203).json({ message: "Success" })
}