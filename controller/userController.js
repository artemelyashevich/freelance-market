import { UserService } from "../service/userService.js"

const userService = new UserService()

export const findAllUsers = async (req, res) => {
    const data = await userService.findAllUsers()
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(200).json(data)
} 

export const findOneUser = async (req, res) => {
    const data = await userService.findOneUser(req.params.id)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(200).json(data)
}