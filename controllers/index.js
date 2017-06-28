var express = require("express");
var router = express.Router();

var BucketQuery = require('../db/bucket_query');
var query = new BucketQuery();

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

router.get('/api/bucket', function (req, res) {
  query.all(function (data) {
    res.json(data);
  });
});

router.post('/api/bucket', function (req, res) {
  var newCountry = {name: req.body.name};
  query.add(newCountry, function (data) {
    res.json(data);
  });
});

module.exports = router;
