import User from '../models/user.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

export class AuthService {

    async registerUser(data) {
        try {
            const { password, ...user } = data

            const idx = await User.findOne({
                email: data.email
            })

            if (idx) {
                return { error: "User already exist" }
            }

            const hash = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString()

            const doc = new User({
                ...user,
                passwordHash: hash
            })

            const newUser = await doc.save()

            const token = jwt.sign({
                _id: newUser._id
            }, process.env.TOKEN_SECRET, { expiresIn: '30d' })

            const { passwordHash, ...userData } = newUser._doc

            return { ...userData, token: token }
        } catch (err) {
            console.log(err)
            return { serverError: "Error" }
        }
    }

    async loginUser(data) {
        try {
            const user = await User.findOne({ email: data.email })

            if (!user) {
                return { error: "Not found" }
            }

            const decPass = CryptoJS.AES.decrypt(user.passwordHash, process.env.PASSWORD_SECRET)

            const pass = decPass.toString(CryptoJS.enc.Utf8)

            if (pass != data.password) {
                return { error: "Incorrect password" }
            }

            const token = jwt.sign({
                _id: user._id
            }, process.env.TOKEN_SECRET, { expiresIn: '30d' })

            const { passwordHash, ...userData } = user._doc

            return { ...userData, token: token }
        } catch (err) {
            console.log(err)
            return { serverError: "Error" }
        }
    }

    async resetPassword(data) {
        try {
            const user = await User.findOne({ email: data.email })
            if (!user) {
                return { error: "Not found" }
            }
            if (data.newPassword == data.oldPassword) {
                return { error: "Incorrect new password" }
            }
            const decPass = CryptoJS.AES.decrypt(user.passwordHash, process.env.PASSWORD_SECRET)

            const pass = decPass.toString(CryptoJS.enc.Utf8)

            if (pass != data.oldPassword) {
                return { error: "Incorrect password" }
            }
            const newPasswordHash = CryptoJS.AES.encrypt(data.newPassword, process.env.PASSWORD_SECRET).toString()

            User.updateOne({ email: req.body.email }, {
                passwordHash: newPasswordHash
            }, { returnDocument: 'after' })
        } catch (err) {
            console.log(err)
            return { serverError: "Error" }
        }

    }
}