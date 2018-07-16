var express = require('express');
var users = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  users.find(req.params.id);
  res.status(200).end();
})

module.exports = router;
