import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from "./routes/authRoute.js"
import reviewRouter from "./routes/reviewRoute.js"
import serviceRouter from "./routes/serviceRoute.js"
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"
import categoryRouter from "./routes/categoryRoute.js"


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
app.use(serviceRouter)
app.use(orderRouter)
app.use(userRouter)
app.use(categoryRouter)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

