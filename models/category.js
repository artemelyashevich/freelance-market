import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

export default mongoose.model('category', categorySchema)