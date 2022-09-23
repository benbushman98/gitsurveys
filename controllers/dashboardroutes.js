const router = require('express').Router();
const { Survey, Question, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/survey/:id', async (req, res) => {
  try {
    const surveyData = await Survey.findByPk(req.params.id, {
    });
    // const surveys = surveyData.map((survey) => survey.get({ plain: true }));
    console.log(surveyData);

    res.render('dashboard', {
      surveyData,
      // logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try{
  const surveyData = await Survey.findAll().catch((err) => {
    res.json(err);
  });
  console.log(surveyData);
  const surveys = surveyData.map((survey) => survey.get({ plain:true }));
  console.log(surveys);
  res.render('dashboard', { surveys });
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
