import Review from '../models/review.js'

export class ReviewService {
    async createReview(data) {
        try {
            const review = new Review(data)
            await data.save()
        } catch (err) {
            console.log(err)
            return { serverError: "Server error!" }
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
            return { serverError: "Server error!" }
        }
    }

    async findOneReview(params) {
        try {
            const review = await Review.findById(params.id)
            return review
        } catch (err) {
            console.log(err)
            return { serverError: "Server error!" }
        }
    }

    async editReview(params, body) {
        try {
            await Review.updateOne({ _id: params.id },
                body,
                { returnDocument: 'after' })
        } catch (err) {
            console.log(err)
            return { serverError: "Server error!" }
        }
    }

    async deleteReview(params) {
        try {
            await Review.deleteOne({ _id: params.id })
        } catch (err) {
            console.log(err)
            return { serverError: "Server error!" }
        }
    }
}