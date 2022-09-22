const router = require('express').Router();
//import models
//add withAuth

//GET DASHBOARD (NEEDS TO GET ALL SURVEYS AS WELL)
router.get('/', (req, res) => {
    res.render('dashboard');
});

//EDIT SURVEY PAGE

module.exports = router;