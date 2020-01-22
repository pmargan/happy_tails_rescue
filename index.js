const express = require("express")
const router = express.Router()
const AuthRoutes = require("./routes/auth_routes")
const AnimalRoutes = require("./routes/animal_routes")
const passport = require("passport")
const port = process.env.PORT || 5000
app = express()

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get("/", (req, res) => res.send("Welcome"))
app.use("/auth", AuthRoutes)
app.use("/animals", AnimalRoutes)

module.exports = router