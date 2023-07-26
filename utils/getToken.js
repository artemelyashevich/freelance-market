export const getToken = (req) => {
    return (req.headers.authorization || '').replace(/Bearer\s?/, '')
}