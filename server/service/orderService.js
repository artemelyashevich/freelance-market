import Order from '../models/order.js'
import { notFoundError, serverError, unAuthorizedError } from '../utils/HTTPErrors.js'
import { getIdByToken } from '../utils/getToken.js'

export class OrderService {
    async createOrder(body) {
        try {
            const doc = new Order(body)
            await doc.save()
            return doc
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAllOrders(query) {
        try {
            let orders = await Order.find()
            if (query.price === 'asc') {
                orders = await Order.find().sort({ price: 1 })
            } else if (query.price === 'desc') {
                orders = await Order.find().sort({ price: -1 })
            }
            if (query.status) {
                orders.filter(item => item.status === query.status)
            }
            if (query.creatorId) {
                orders = orders.filter(item => item.creatorId === query.creatorId)
            }
            if (query.executorId) {
                orders = orders.filter(item => item.executorId === query.executorId)
            }
            if (query.technology) {
                let technology = query.technology.split(',')
                orders = orders.filter(item => item.technology.some(el => technology.includes(el)))
            }
            if (query.category) {
                orders = orders.filter(item => item.category === query.category)
            }
            return orders
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findOneOrder(id) {
        try {
            const order = await Order.findById(id)
            if (!order) {
                return notFoundError()
            }
            return order
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async editOrder(id, body, token) {
        try {
            const creatorID = getIdByToken(token)
            const idx = await Order.findOne(
                { _id: id }
            )
            if (!idx) {
                return notFoundError()
            }
            if (creatorID._id != idx.creatorId) {
                return unAuthorizedError()
            }
            const order = await Order.updateOne(
                { _id: id },
                body,
                { returnDocument: 'after' })
            return order
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async deleteOrder(id, token) {
        try {
            const creatorID = getIdByToken(token)
            const idx = await Order.findOne(
                { _id: id }
            )
            if (!idx) {
                return notFoundError()
            }
            if (creatorID._id != idx.creatorId) {
                return unAuthorizedError()
            }
            await Order.deleteOne({ _id: id })
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}
