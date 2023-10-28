const { Router } = require('express');
const genres = require('./genresRoutes');
const videogames = require('./videogamesRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/videogames", videogames)

router.use("/genres", genres)


module.exports = router;
