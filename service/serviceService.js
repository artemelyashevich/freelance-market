import Service from '../models/service.js'
import { serverError } from '../utils/HTTPErrors.js'

export class ServiceService {
    async createService(data) {
        try {
            const service = new Service(data)
            await data.save()
            return service
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAllServices(query) {
        try {
            let services = await Service.find()
            if (query.creator) {
                services = await Service.find({ title: query.title })
            }
            return services
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}