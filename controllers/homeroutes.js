const router = require('express').Router();
const {Survey, Question} = require('../models');

// GET for Homepage
router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/login', (req, res) => {
    res.render('login', {layout: 'main2'}) 
  });

  router.get('/signup', (req, res) => {
    res.render('signup', {layout: 'main2'}) 
  });

  
  
  // We want to get the survey id to be pulled up automatically
  router.get('/survey/:id', async (req, res) => {
    try{
      const surveyData = await Survey.findByPk(req.params.id,{
        include: [
          {
            model: Question,
            attributes: ['question_body', 'response'],
          },
        ],
       
      });
      if (!surveyData) {
        console.log(error, 'Not found')
      }
    //This connects to handlebars, but still doesn't display anything
      const survey =  surveyData.get({plain:true});
      // allSurveysData.map((survey) =>
      res.render('singlesurvey', {
        ...survey
      }
      );
     
    // console.log(allSurveysData);

    //↓This shows the data from the database
      // res.status(200).json(allSurveysData);

   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

module.exports = router;
