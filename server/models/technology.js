import mongoose from "mongoose"

const technologySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }   
}, {
    timestamps: true
})

export default mongoose.model('technology',technologySchema)