import Response from '../models/response.js'
import { serverError } from '../utils/HTTPErrors.js'

export class ResponseService {
    async create(body) {
        try {
            const doc = new Response(body)
            await doc.save()
            return doc
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAll(query) {
        try {
            let responses = await Response.find()
            if (query.orderId) {
                responses = responses.filter(item => item.orderId === query.orderId)
            }
            if (query.creatorId) {
                responses = responses.filter(item => item.creatorId === query.creatorId)
            }
            return responses
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async delete(params) {
        try {
            await Response.deleteOne({_id: params.id})
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }


}
