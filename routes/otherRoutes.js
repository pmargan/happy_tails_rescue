const express = require("express")
const router = express.Router()
const { DynamicTextModel } = require('../database/schemas/dynamicText_schema')
const mongoose = require('mongoose')

router.get('/about', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'welcomePage' })
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})

router.get('/contact', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'contactPage' }) 
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})

router.get('/community-programs', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'communityPrograms' }) 
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})

router.get('/foster', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'foster' }) 
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})

router.get('/help-us', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'helpUs' }) 
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})

router.get('/volunteer', async (req, res) => {
    let doc = await DynamicTextModel.findOne({ id: 'volunteer' }) 
    .then(doc => {
        res.status(200).send(doc)
    })
    .catch(err => res.status(500).send =({
        error: err.message
    }))
})
module.exports = router
