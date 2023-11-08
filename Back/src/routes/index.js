const { Router } = require('express');
const genres = require('./genresRoutes');
const videogames = require('./videogamesRoutes');
const platforms = require("./platformsRoutes")

const router = Router();

router.use("/videogames", videogames)

router.use("/genres", genres)

router.use("/platforms", platforms)


module.exports = router;
