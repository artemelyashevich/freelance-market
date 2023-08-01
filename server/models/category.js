import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model('category', categorySchema)