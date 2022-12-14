const router = require('express').Router();
const { Survey } = require('../models');
const withAuth = require('../utils/auth');

//GET A SINGLE SURVEY - THIS WORKS ✔️✔️ 
// router.get('/survey/:id', withAuth, async (req, res) => {
//   try {
//     const surveyData = await Survey.findByPk({
//       where: {
//         id: req.params.id,
//       }
//     });
//     console.log(surveyData);
//     res.render('login', {layout: 'main2'}) 
//       // surveyData,
//       // loggedIn: req.session.logged_in
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//DASHBOARD PAGE & ALL SURVEYS BELONGING TO THE USER - THIS WORKS ✔️✔️
router.get('/', withAuth, async (req, res) => {
  try{
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
