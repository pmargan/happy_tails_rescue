const express = require("express")
const router = express.Router()
const { DynamicTextModel } = require('../database/schemas/dynamicText_schema')
const mongoose = require('mongoose')

router.get('/about', async (req, res) => {
    // console.log(typeof DynamicTextModel)
    let doc = await DynamicTextModel.findOne({ id: 'welcomePage' })
    // console.log(doc)
    res.status(200).send(doc)
})

router.get('/contact', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'contactPage' }) 
    .then(doc => {
        // contactMap = doc.map()
        // res.status(200).send(contactMap)
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})


module.exports = router
