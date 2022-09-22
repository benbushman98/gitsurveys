const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashboardroutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;