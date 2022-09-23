const router = require('express').Router();
const userRoutes = require('./userRoutes');
const surveyRoutes = require('./surveyRoutes');
const questionRoutes = require ('./questionRoutes')

router.use('/users', userRoutes);
router.use('/survey', surveyRoutes);
router.use('/question', questionRoutes);

module.exports = router;