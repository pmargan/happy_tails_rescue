const express = require("express")
const router = express.Router()
const { UserModel } = require('../database/schemas/user_schema')
const bcrypt = require('bcrypt')

router.post("/register", async (req, res) => {

  console.log(req.body.email)

  let user = await UserModel.findOne({ email: req.body.email })
  if(user) return res.status(409).json({"message": "An account already exists with that email."})

  user = new UserModel({email: req.body.email, password: req.body.password})
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  await user.save()

  let authToken = user.generateAuthToken()

  user.authToken = authToken

  res.send({user: user, authToken: authToken})
})

router.post("/login", async (req, res) => {
  let user = await UserModel.findOne({ email: req.body.email })
  console.log(user)
  if(!user) return res.status(401).json({"message":"Invalid Email or Password."})
  
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  console.log(validPassword)
  if (!validPassword) return res.status(401).json({"message":"Invalid Email or Password."})
  
  let authToken = user.generateAuthToken()

  user.authToken = authToken

  res.send({user: user, authToken: authToken})
})

module.exports = router;