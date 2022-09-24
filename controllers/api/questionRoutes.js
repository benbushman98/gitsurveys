//IF WE CHANGE OUR MODELS TO USER AND SURVEY THEN WE CAN DELETE THIS FILE

const router = require('express').Router();
const { Question } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const questionData = await Question.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!questionData) {
      res.status(404).json({ message: 'No question found with this id!' });
      return;
    }

    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
