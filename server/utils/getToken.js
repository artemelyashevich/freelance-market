import jwt_decode from "jwt-decode"

export const getIdByToken = (token) => {
    let encoded = (token || '').replace(/Bearer\s?/, '')
    let decoded = jwt_decode(encoded)
    return decoded
}