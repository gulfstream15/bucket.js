var Query = require('../models/countries');
var query = new Query();

var UI = function () {
  this.request();
}

UI.prototype = {

  request: function () {
    var url = "http://localhost:3000/api/bucket";
    var onRequestComplete = function (data) {
      console.log(data);
      console.log(this);
      this.render(data);
    }.bind(this);
    query.all(onRequestComplete)
  },

  render: function (countries) {
    var container = document.getElementById('countries');

    var ul = document.createElement('ul');
    container.appendChild(ul);

    for(var country of countries) {
      var li = document.createElement('li');
      li.innerText = country.name;
      ul.appendChild(li);
    }


  }
}

module.exports = UI;
