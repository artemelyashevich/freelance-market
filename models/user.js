import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    passwordHash: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    resume: {
        type: String
    },
    professions: {
        type: Array
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)