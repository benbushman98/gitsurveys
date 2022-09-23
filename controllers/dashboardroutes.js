const router = require('express').Router();
const { Survey, Question, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/survey/:id', withAuth, async (req, res) => {
  try {
    const surveyData = await Survey.findByPk(req.params.id, {
    });
    // const surveys = surveyData.map((survey) => survey.get({ plain: true }));
    console.log(surveyData);

    res.render('dashboard', {
      surveyData,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', withAuth, async (req, res) => {
  try{
    //where we find all the surveys with the id of the req.session.user_id
    const surveyData = await Survey.findAll({
      where: {user_id: req.session.user_id}
    }).catch((err) => {
      res.json(err);
    });
    const surveys = surveyData.map((survey) => survey.get({ plain:true }));
    console.log(surveys);
    res.render('dashboard', { 
      surveys,
      loggedIn: req.session.logged_in 
    });
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
