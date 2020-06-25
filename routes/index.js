var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome to the backend")
  // res.render('index', { title: 'Express' });
});

module.exports = router;
