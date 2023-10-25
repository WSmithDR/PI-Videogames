const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames');
const getVideogameById = require('../controllers/getVideoGameById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", getVideogames)
router.use("/videogames/:id", getVideogameById)


module.exports = router;
