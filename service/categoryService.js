import Category from '../models/category.js'
import { badRequestError, notFoundError, serverError } from '../utils/HTTPErrors.js'

export class CategoryService {
    async createCategory(body) {
        try {
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

    async editCategory(title, body) {
        try {
            const idx = await Category.find({ title: title })
            if (!idx) {
                return notFoundError()
            }
            const category = await Category.updateOne(
                { title: title },
                body,
                { returnDocument: 'after' })
            return category
        } catch (err) {
            console.log(err)
            return serverError()
        }
    }

    async deleteCategory(title) {
        try {
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