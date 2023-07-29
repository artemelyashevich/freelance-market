import { OrderService } from "../service/orderService.js"

const orderService = new OrderService()

export const createOrder = async (req, res) => {
    const data = await orderService.createOrder(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const findAllOrders = async (req, res) => {
    const data = await orderService.findAllOrders(req.query)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const findOneOrder = async (req, res) => {
    const data = await orderService.findOneOrder(req.params.id)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const editOrder = async (req, res) => {
    const data = await orderService.editOrder(req.params.id, req.body, req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const deleteOrder = async (req, res) => {
    const data = await orderService.deleteOrder(req.params.id, req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json({ message: "Success" })
}