import { Router } from "express"
import handleVAlidators, { addOrderValidation, editOrderValidation } from "../validations/validations.js"
import checkAuth from "../validations/checkAuth.js"
import { createOrder, deleteOrder, editOrder, findAllOrders, findOneOrder } from "../controller/orderController.js"

const orderRouter = Router()

orderRouter.post(`/order`, addOrderValidation, handleVAlidators, checkAuth, createOrder)
orderRouter.get(`/order`, findAllOrders)
orderRouter.get(`/order/:id`, findOneOrder)
orderRouter.put(`/order/:id`, checkAuth, editOrder)
orderRouter.delete(`/order/:id`, editOrderValidation, handleVAlidators, checkAuth, deleteOrder)

export default orderRouter