import { AuthService } from '../service/authService.js'

const authService = new AuthService()

export const registerUser = async (req, res) => {
    const data = await authService.registerUser(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}

export const loginUser = async (req, res) => {
    const data = await authService.loginUser(req.body)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json(data)
}

export const resetPassword = async (req, res) => {
    const data = await authService.resetPassword(req.body, req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: data.error })
    }
    res.status(201).json({message: "Success"})
}