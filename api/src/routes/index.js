const { Router } = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');


const router = Router();

/*  GET /countries/{idPais}:
Obtener el detalle de un país en particular
Debe traer solo los datos pedidos en la ruta de detalle de país
Incluir los datos de las actividades turísticas correspondientes */

router.get('/countries/:idPais', async (req, res, next) => {
    const { idPais } = req.params;

    let foundCt = await Country.findOne({
        where: {
            id: idPais
        },
        include: [{
            model: Activity
        }]
    });

    res.json(foundCt);
})
/* GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
Obtener un listado de los primeros 10 países */


router.use('/countries', async (req, res, next) => {

    let ctDb = null;
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
                return res.send('Country not found, try again.');
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
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/activity', async (req, res, next) => {
    const idii = uuidv4();
    const newObj = {
        ...req.body,
        id: idii
    }
    const { countryId } = req.body;

    try {
        /* await Activity.create(newObj)
            .then(createdAct => {
                res.json(createdAct)
            }).catch(err => {
                console.log(err);
            }) */

        const newActivity = await Activity.create(newObj)





        console.log(newActivity)
        newActivity.setCountries(countryId);
        res.json(newActivity);
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;