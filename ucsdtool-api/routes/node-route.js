var express = require('express');
var router = express.Router();

router.post('/p', function(req, res, next) {
  console.log("posted a class");
  res.json(req);
});

router.get('/:dept', function(req, res, next) {
  //Do Something
  console.log(req.params.dept);
  res.send("Class from department: " + req.params.dept);
});

router.get('/', function(req, res, next) {
  console.log("all");
  res.send("All Classes");
});

module.exports = router;
