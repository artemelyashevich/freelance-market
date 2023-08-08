import { Router } from "express"
import { createResponse, findAllResponses } from "../controller/responseController.js"
import checkAuth from "../validations/checkAuth.js"

const responseRouter = Router()

responseRouter.get(`/response`, checkAuth, findAllResponses)
responseRouter.post(`/response`, checkAuth, createResponse)
responseRouter.delete(`/response/:id`)

export default responseRouter