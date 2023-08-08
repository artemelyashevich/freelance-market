import { Router } from "express"
import checkAuth from "../validations/checkAuth.js"
import { createTechnology, deleteTechnology, findTechnology } from "../controller/technologyController.js"

const technologyRouter = Router()

technologyRouter.get(`/technology`, findTechnology)
technologyRouter.post(`/technology`, checkAuth, createTechnology)
technologyRouter.delete(`/technology/:id`, checkAuth, deleteTechnology)

export default technologyRouter