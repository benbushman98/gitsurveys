const router = require('express').Router();
const {Survey, Question, User} = require('../models');

//GET HOME PAGE & ALL SURVEYS - THIS WORKS ✔️✔️
router.get('/', async (req, res) => {
  const surveyData = await Survey.findAll().catch((err) => { 
    res.json(err);
  });
  const surveys = surveyData.map((survey) => survey.get({ plain: true }));
    res.render('homepage', { surveys });
});

//GET LOGIN PAGE - THIS WORKS ✔️✔️
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {layout: 'main2'}) 
});

//GET SIGN-UP PAGE - THIS WORKS ✔️✔️
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {layout: 'main2'}) 
});

//GET DASHBOARD PAGE - NOTE: HAVING A ROUTE TO THE DASHBOARD IN THE HOMEROUTES FILE MESSED UP MY HOMEWORK DOWN THE LINE. WE CAN UNCOMMENT IT OUT AT THE END IF IT DOESN'T BREAK STUFF.
// router.get('/dashboard', (req, res) => {
//   if (!req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('dashboard') 
// });

//GET SINGLE SURVEY PAGE - THIS IS WORKING NOW!!
router.get('/survey/:id', async (req, res) => {
  try{
    const surveyData = await Survey.findOne(
      {
        where: {
          id: req.params.id,
        },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    if (!surveyData) {
      res.status(404).json({ message: 'Post ID not found' });
      return;
    }

    const survey =  surveyData.get({ plain:true });
    // console.log(req.session.name)
    console.log(survey.option1)
    res.render('singlesurvey', { survey, option1: survey.option1, option2: survey.option2, option3: survey.option3,
      option4: survey.option4, date: survey.date_created, name: survey.user.name, logged_in: req.session.logged_in } );

  //↓This shows the data from the database
    // res.status(200).json(surveyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
