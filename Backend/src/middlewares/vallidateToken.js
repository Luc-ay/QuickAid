// const jwt = require("jsonwebtoken")
import jwt from 'jsonwebtoken'

const validateToken = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access Denied!' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = { id: decoded.id }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

export default validateToken
