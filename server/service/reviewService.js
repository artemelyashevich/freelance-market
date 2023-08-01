import Review from '../models/review.js'
import { notFoundError, serverError, unAuthorizedError } from '../utils/HTTPErrors.js'
import { getIdByToken } from '../utils/getToken.js'

export class ReviewService {
    async createReview(data) {
        try {
            const review = new Review(data)
            await data.save()
            return review
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAllReviews(query) {
        try {
            let reviews = await Review.find()
            if (query.creator) {
                reviews = await Review.find({ creatorId: query.creator })
            }
            if (query.user) {
                reviews = await Review.find({ userId: query.user })
            }
            return reviews
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findOneReview(params) {
        try {
            const review = await Review.findById(params.id)
            if (!review) {
                return notFoundError()
            }
            return review
        } catch (err) {
            console.log(err)
            return serverError
        }
    }

    async editReview(params, body, token) {
        try {
            const idx = await Review.findById(params.id)
            if (!idx) {
                return notFoundError()
            }
            const creatorID = getIdByToken(token)
            if (creatorID._id != idx.creatorId) {
                return unAuthorizedError()
            }
            await Review.updateOne({ _id: params.id },
                body,
                { returnDocument: 'after' })
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async deleteReview(params) {
        try {
            const review = await Review.findById(params.id)
            if (!review) {
                return notFoundError()
            }
            const creatorID = getIdByToken(token)
            if (creatorID._id != review.creatorId) {
                return unAuthorizedError()
            }
            await Review.deleteOne({ _id: params.id })
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}