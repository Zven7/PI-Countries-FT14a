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
            const { name } = req.query;


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
            const ctDb = await Country.findAll({
                /* limit: 20, */
                include: [{
                    model: Activity
                }]
            });
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
/*  GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado */

/*  POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos */


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