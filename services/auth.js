const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (req, res, next) {
  let token
  if (req.get('Authorization')) {
    token = req.get('Authorization').split(" ")[1]
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
  }
  catch (ex) {
    res.user = undefined
  }

  next()
}
