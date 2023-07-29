import User from '../models/user.js'
import { notFoundError, serverError } from '../utils/HTTPErrors.js'

export class UserService {
    async findAllUsers() {
        try {
            const users = await User.find()
            return users
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findOneUser(id) {
        try {
            const user = await User.findById(id)
            if (!user) {
                return notFoundError()
            }
            return user
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}