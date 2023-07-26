import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from "./routes/authRoute.js"
import reviewRouter from "./routes/reviewRoute.js"


dotenv.config()

const app = express()

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.log(err))

const PORT = process.env.PORT || 4444

app.use(express.json())

app.use(authRouter)
app.use(reviewRouter)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

