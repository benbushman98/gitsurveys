const router = require('express').Router();
const { Survey, Question, User } = require('../models');
const withAuth = require('../utils/auth');
//import models
//add withAuth

//GET DASHBOARD (NEEDS TO GET ALL SURVEYS AS WELL)

router.get('/edit/:id', async (req, res) => {
  try {
    const surveyData = await Survey.findByPk({
      where: {
        id: req.params.id,
      },
    });
    if (!surveyData) {
      res.status(404).json({ message: 'No survey found with that ID.' });
    }
    const survey = surveyData.get({ plain: true });
    res.render('editsurvey', {
      ...survey,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const surveyData = await Survey.findAll({
      include: [{ model: Question }, { model: User }],
    });
    const surveys = surveyData.map((i) => i.get({ plain: true }));
    res.render('dashboard',{
      surveys
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//EDIT SURVEY PAGE

module.exports = router;
