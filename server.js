var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mainRouter = require('./controllers/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('build'));
app.use(mainRouter);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/build/index.html');
// });
//
// app.get('/api/bucket', function (req, res) {
//   query.all(function (data) {
//     res.json(data);
//   })
//
// })

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
