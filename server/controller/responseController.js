import { ResponseService } from "../service/responseService.js";

const responseService = new ResponseService()

export const findAllResponses = async (req, res) => {
    const data = await responseService.findAll(req.query)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const createResponse = async (req, res) => {
    const data = await responseService.create(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}

export const deleteResponse = async (req, res) => {
    const data = await responseService.delete(req.params)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(203).json({
        message: "Success"
    })
}