import { TechnologyService } from "../service/technologyService.js";

const technologyService = new TechnologyService()

export const createTechnology = async (req, res) => {
    const data = technologyService.create(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}

export const findTechnology = async (req, res) => {
    const data = technologyService.findAll()
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const deleteTechnology = async (req, res) => {
    const data = technologyService.delete(req.params)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(203).json({
        message: "Success"
    })
}