const { Router } = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


router.post('/', async (req, res, next) => {
    const idii = uuidv4();
    const newObj = {
        ...req.body,
        id: idii
    }
    const { countryId } = req.body;

    try {
        const newActivity = await Activity.create(newObj)
        newActivity.setCountries(countryId);
        res.json(newActivity).status(200);
    }
    catch (err) {
        next(err);
        res.sendStatus(504);
    }
})

module.exports = router; 