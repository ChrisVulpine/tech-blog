const router = require("express").Router();


const viewsRoutes = require("../controllers")
const apiRoutes = require('./api');




router.use('/api', apiRoutes);
router.use("/", viewsRoutes);



module.exports = router;