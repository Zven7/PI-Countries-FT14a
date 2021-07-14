const { Router } = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


router.get('/:idPais', async (req, res, next) => {
    try {
        const { idPais } = req.params;


        let foundCt = await Country.findOne({
            where: {
                id: idPais
            },
            include: [{
                model: Activity
            }]
        });
        foundCt === null
        ? res.send('Country Not Found').status(404)
        : res.json(foundCt);
    }
    catch{
        next(err).status(504)
    }
})

router.use('/', async (req, res, next) => {
    let ctDb = null;

    //Initialize DB with Api Data
    /* try {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(async r => {
                const processedData = [];
                r.data.map(async (ct) => {
                    processedData.push({
                        name: ct.name,
                        capital: ct.capital,
                        subregion: ct.subregion,
                        continent: ct.region,
                        image: ct.flag,
                        id: ct.alpha3Code,
                        area: ct.area,
                        population: ct.population,
                    })
                })
                processedData.forEach(async ct => {
                    await Country.bulkCreate(processedData, {
                        returning: true
                    }).then(dbCt => {
                        res.json(dbCt);
                    }).catch(err => {
                        console.log(err);
                    })
                })
            })
            .catch(error => {
                console.error(error)
            })
    }
    catch (error) {
        next(error);
    } */

    try {
        if (req.query.name) {
            console.log('QUERY')
            const { name, order } = req.query;


            const queryResult = await Country.findAll({
                where: {
                    name: {
                        [Sequelize.Op.iLike]: `%${name}%`
                    }
                }
            });


            if (queryResult.length > 0) {
                return res.json(queryResult)
            } else {
                return res.json('Country not found, try again.').status(404);
            }
        } else {
            const { order } = req.query;
            if(order === 'ASC' || !order){
                ctDb = await Country.findAll({
                    include: [{
                        model: Activity,
                    }],
                    order: [['name','ASC']]
                });
                console.log('QUERY', order)
            }
            else if(order === 'DESC'){
                console.log('QUERY', order)
                ctDb = await Country.findAll({
                    include: [{
                        model: Activity,
                    }],
                    order: [['name','DESC']]
                });
            }
            else if(order === 'ASCPOP'){
                console.log('QUERY', order)
                ctDb = await Country.findAll({
                    include: [{
                        model: Activity,
                    }],
                    order: [['population','ASC']]
                });
            }
            else if(order === 'DESCPOP'){
                console.log('QUERY', order)
                ctDb = await Country.findAll({
                    include: [{
                        model: Activity,
                    }],
                    order: [['population','DESC']]
                });
            }
            try {
                console.log('CT-DB is Live!')
                return res.json(ctDb);
            }
            catch (err) {
                next(err);
                res.status(404);
            }
        }
    } catch (err) {
        next(err);
        res.status(504);
    }
});

module.exports = router; 