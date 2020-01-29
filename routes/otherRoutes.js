const express = require("express")
const router = express.Router()
const {DynamicTextModel} = require('../database/schemas/dynamicText_schema')
//mongoose
//dynamicTextSchema

router.get('/about', async (req, res) => {
    // console.log(typeof DynamicTextModel)
    let doc = await DynamicTextModel.findOne({ id: 'welcomePage' })
    // console.log(doc)
    res.status(200).send(doc)
})

router.get('/contact', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'contactDog' }) // needs to list out contactDog, contactCat, fundraisingMain and mediaEnquiries
    res.status(200).send(doc)
})

module.exports = router
