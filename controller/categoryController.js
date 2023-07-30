import { CategoryService } from "../service/categoryService.js"

const categoryService = new CategoryService()

export const findAllCategories = async (req, res) => {
    const data = await categoryService.findAllCategories()
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(200).json(data)
}

export const createCategory = async (req, res) => {
    const data = await categoryService.createCategory(req.body, req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const findOneCategory = async (req, res) => {
    const data = await categoryService.findOneCategory(req.params.title)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(201).json(data)
}

export const deleteCategory = async (req, res) => {
    const data = await categoryService.deleteCategory(req.params.title, req.headers.authorization)
    if (data.error) {
        return res.status(data.status).json({ message: "Something went wrong..." })
    }
    res.status(203).json({message: "Success"})
}