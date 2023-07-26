import { AuthService } from '../service/authService.js'

const authService = new AuthService()

export const registerUser = async (req, res) => {
    const data = await authService.registerUser(req.body)
    if (data.error) {
        return res.status(400).json({ message: data.error })
    }
    if (data.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const loginUser = async (req, res) => {
    const data = await authService.loginUser(req.body)
    if (data.error) {
        return res.status(400).json({ message: data.error })
    }
    if (data.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const resetPassword = async (req, res) => {
    const data = await authService.resetPassword(req.body)
    if (data.error) {
        return res.status(400).json({ message: data.error })
    }
    if (data.serverError) {
        return res.status(500).json({ message: "Something went wrong..." })
    }
    res.status(201).json({
        message: "Password changed",
        status: "Success"
    })
}