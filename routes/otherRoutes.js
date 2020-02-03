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

router.post("/adoption", (req, res) => {
    // console.log(req.body)
    const newAdoption = new AdoptionModel({
        firstName: req.body.firstname,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        address: req.body.address,
        hearAboutUs: req.body.hearAboutUs,
        type: req.body.type,
        name: req.body.name,
        breed: req.body.breed,
        whyAdoption: req.body.whyAdoption,
        whyThisAnimal: req.body.whyThisAnimal,
        desirableCharacteristics: req.body.desirableCharacteristics,
        undesirableCharacteristics: req.body.undesirableCharacteristics,
        houseOwnership: req.body.houseOwnership,
        livingArrangementsDayNight: req.body.livingArrangementsDayNight,
        describeHomeFencing: req.body.describeHomeFencing,
        otherPets: req.body.otherPets,
        otherPetsVetwork: req.body.otherPetsVetwork,
        otherPeople: req.body.otherPeople,
        homeAloneHours: req.body.homeAloneHours,
        exercise: req.body.exercise,
        holidays: req.body.holidays,
        surrenderAnAnimal: req.body.surrenderAnAnimal,
        refusedAnAnimal: req.body.refusedAnAnimal,
        surrenderCircumstances: req.body.surrenderCircumstances,
        homeCheck: req.body.homeCheck,
        updates: req.body.updates,
        returnAnimal: req.body.returnAnimal,
        extraInfo: req.body.extraInfo,
        agreeAll: req.body.agreeAll,
        fullName: req.body.fullName,
        sign: req.body.sign
    });
    newAdoption.save();
    res.send(newAdoption)
});

module.exports = router
