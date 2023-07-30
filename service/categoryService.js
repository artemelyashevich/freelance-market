import Category from '../models/category.js'
import { badRequestError, notFoundError, serverError, unAuthorizedError } from '../utils/HTTPErrors.js'
import { getIdByToken } from '../utils/getToken.js'
import User from '../models/user.js'

export class CategoryService {
    async createCategory(body, token) {
        try {
            const userId = getIdByToken(token)
            const user = await User.findById(userId._id)
            if (user.status != 'Admin'){
                return unAuthorizedError('No access')
            }
            const idx = await Category.findOne({
                title: body.title
            })
            if (idx) {
                return badRequestError("Such category already exist")
            }
            const category = new Category(body)
            await category.save()
            return category
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findAllCategories() {
        try {
            const categories = await Category.find()
            return categories
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async findOneCategory(title) {
        try {
            const category = await Category.find({ title: title })
            if (!category) {
                return notFoundError()
            }
            return category
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async deleteCategory(title, token) {
        try {
            const userId = getIdByToken(token)
            const user = await User.findById(userId._id)
            if (user.status != 'Admin'){
                return unAuthorizedError('No access')
            }
            const idx = await Category.find({ title: title })
            if (!idx) {
                return notFoundError()
            }
            await Category.deleteOne({title: title})
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }
}