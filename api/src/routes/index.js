const { Router } = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


const countriesLogic = require('./countriesLogic')
const activitiesLogic = require('./activitiesLogic')

router.use('/countries', countriesLogic);
router.use('/activity', activitiesLogic);


module.exports = router;  