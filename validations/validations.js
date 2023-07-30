import { body, validationResult } from "express-validator"

export default (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    next()
}

// auth

export const registerUserValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('image', 'Invalid image path').optional().isString(),
    body('status', 'Specify status').isString(),
    body('name', 'Specify name').isString(),
    body('password', 'Password must contain 5 characters').isLength({ min: 5 }),
    body('description', 'Invalid description').optional().isString(),
    body('resume', 'Invalid resume').optional().isString(),
    body('professions', 'Invalid professions').optional().isArray(),
]

export const loginUserValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must contain 5 characters').isLength({ min: 5 })
]

export const resetPswUserValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('oldPassword', 'Password must contain 5 characters').isLength({ min: 5 }),
    body('newPassword', 'Password must contain 5 characters').isLength({ min: 5 })
]

// review

export const addReviewValidation = [
    body('creatorId', 'Invalid creator id format').isMongoId(),
    body('title', 'Invalid title format').isLength({ min: 3 }),
    body('description', 'Invalid description format').isLength({ min: 5 }),
    body('userId', 'Invalid user id format').isMongoId(),
]

export const editReviewValidation = [
    body('title', 'Invalid title format').isLength({ min: 3 }),
    body('description', 'Invalid description format').isLength({ min: 5 })
]

// service

export const addServiceValidation = [
    body('creatorId', 'Invalid creator id format').isMongoId(),
    body('title', 'Invalid title format').isLength({ min: 3 }),
    body('description', 'Invalid description format').isLength({ min: 5 }),
    body('categoryId', 'Invalid category id format').isMongoId(),
    body('price', 'Invalid price format').isNumeric()
]

// category

export const addCategoryValidation = [
    body('title', 'Invalid title format').isString()
]

// order 

export const addOrderValidation = [
    body('creatorId','Invalid creator id format').isMongoId(),
    body('title', 'Invalid title format').isLength({min:3}),
    body('description', 'Invalid description format').isLength({min:3}),
    body('executorId', 'Invalid executor id format').optional().isLength({min:3}),
    body('category', 'Invalid category id format').isString(),
    body('price', 'Invalid price format').isNumeric(),
    body('deadline', 'Invalid deadline format').isNumeric(),
    body('technology', 'Invalid technology format').isArray(),
    body('responses', 'Invalid responses format').isArray(),
    body('views', 'Invalid views format').isNumeric(),
    body('status', 'Invalid status format').isString()
]

export const editOrderValidation = [
    body('title', 'Invalid title format').isLength({min:3}),
    body('description', 'Invalid description format').isLength({min:3}),
    body('category', 'Invalid category id format').isString(),
    body('price', 'Invalid price format').isNumeric(),
    body('deadline', 'Invalid deadline format').isNumeric(),
    body('technology', 'Invalid technology format').isArray(),
    body('status', 'Invalid status format').isString()
]