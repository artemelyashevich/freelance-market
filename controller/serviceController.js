import { ServiceService } from "../service/serviceService.js"

const serviceService = new ServiceService()

export const addService = async (req,res) => {
    const data = await serviceService.createService(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const findAllServices = async (req, res) => {
    const services = await serviceService.findAllServices(req.query)
    if (services.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(200).json(services)
}