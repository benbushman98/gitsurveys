const router = require('express').Router();
const { Survey } = require('../../models/'); //changed from '../../models/survey'
const withAuth = require('../../utils/auth');

// POST A NEW SURVEY - THIS WORKS ✔️✔️
router.post('/', withAuth, async (req, res) => {
  try {
    const newSurvey = await Survey.create({
      title: req.body.title,
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSurvey);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE A SURVEY - THIS WORKS ✔️✔️
router.delete('/:id', withAuth, async (req, res) => { 
  try {
    const surveyData = await Survey.destroy({ 
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!surveyData) {
      res.status(404).json({ message: 'No survey found with this id!' });
      return;
    }
    
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
