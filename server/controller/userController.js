import { UserService } from "../service/userService.js"

const userService = new UserService()

export const findAllUsers = async (req, res) => {
    const data = await userService.findAllUsers()
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
} 

export const findOneUser = async (req, res) => {
    const data = await userService.findOneUser(req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(200).json(data)
}

export const updateUser = async (req, res) => {
    const data = await userService.updateUser(req.headers.authorization, req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}