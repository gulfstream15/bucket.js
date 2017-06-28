var Query = require('./models/countries');
var query = new Query();

var app = function () {
  var url = "http://localhost:3000/api/bucket";
  var onRequestComplete = function (data) {
    console.log(data);
  }
  query.all(onRequestComplete)
}



window.addEventListener('load', app);
