const router = require('express').Router();

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
  

module.exports = router;