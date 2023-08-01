import User from '../models/user.js'
import { notFoundError, serverError } from '../utils/HTTPErrors.js'
import { getIdByToken } from '../utils/getToken.js'

export class UserService {
    async findAllUsers() {
        try {
            const users = await User.find()
            let arr = []
            users.forEach(user => {
                let { passwordHash, ...userData } = user._doc
                arr.push(userData)
            })
            return arr
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findOneUser(token) {
        try {
            const id = getIdByToken(token)
            const user = await User.findById(id._id)
            if (!user) {
                return notFoundError()
            }
            const { passwordHash, ...userData } = user._doc
            return userData
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async updateUser(token, body) {
        try {
            const id = getIdByToken(token)
            let user = await User.findById(id._id)
            if (!user) {
                return notFoundError()
            }
            await User.updateOne({_id: id}, body)
            user = await User.findById(id._id)
            return user
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}