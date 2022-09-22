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

  
  
  // We wan tto get the survey id to be pulled up automatically
  router.get('/survey/:id', async (req, res) => {
    try{
      const allSurveysData = await Survey.findByPk(req.params.id,{
        include: [
          {
            model: Question,
            attributes: ['question_body', 'response'],
          },
        ],
       
      });
      if (!allSurveysData) {
        console.log(error, 'Not found')
      }
      const survey =  allSurveysData.get({plain:true});
      res.render('singlesurvey', {
        ...survey
        }
      )
    // res.status(200).json(allSurveysData);
    // allSurveysData.map((survey) =>
   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

module.exports = router;
