import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if (token) {
        try {
            req.userId = jwt.verify(token, process.env.TOKEN_SECRET).id
            next()
        } catch (err) {
            return  res.status(403).json({
                message: 'No access'
            })
        }
    } else {
       return  res.status(403).json({
            message: 'No access'
        })
    }

}