export const notFoundError = (message) => {
    return {
        error: `${message ? message : "Not Found"}`,
        status: 404
    }
}

export const badRequestError = (message) => {
    return {
        error:  `${message ? message : "Bad Request"}`,
        status: 400
    }
}

export const unAuthorizedError = (message) => {
    return {
        error:  `${message ? message : "No Access"}`,
        status: 401
    }
}

export const serverError = (message) => {
    return {
        error:  `${message ? message : "Server Error"}`,
        status: 500
    }
}