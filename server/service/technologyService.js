import Technology from '../models/technology.js'
import { serverError } from '../utils/HTTPErrors.js'

export class TechnologyService {
    async create(body) {
        try {
            const doc = new Technology(body)
            await doc.save()
            return doc
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAll(query) {
        try {
            const technologies = Technology.find()
            return technologies
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async delete(params) {
        try {
            await Technology.deleteOne({_id: params.id})
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}

