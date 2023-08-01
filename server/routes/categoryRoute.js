import { Router } from "express"
import { createCategory, deleteCategory, findAllCategories, findOneCategory } from "../controller/categoryController.js"
import checkAuth from "../validations/checkAuth.js"
import handleVAlidators, { addCategoryValidation } from "../validations/validations.js"

const categoryRouter = Router()

categoryRouter.get(`/category`, findAllCategories)
categoryRouter.post(`/category`, checkAuth, createCategory)
categoryRouter.get(`/category/:title`, findOneCategory)
categoryRouter.delete(`/category/:title`, addCategoryValidation, handleVAlidators, checkAuth, deleteCategory)


export default categoryRouter