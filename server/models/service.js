import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: String,
    price: {
        type: Number,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Service', serviceSchema)