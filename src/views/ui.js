var Query = require('../models/countries');
var query = new Query();

var UI = function () {
  this.request();
}

UI.prototype = {

  request: function () {
    var url = "http://localhost:3000/api/bucket";
    var onRequestComplete = function (data) {
      this.render(data);
    }.bind(this);
    query.all(onRequestComplete)
  },

  renderCountries: function (countries) {
    var ul = document.createElement('ul');

    for(var country of countries) {
      var li = document.createElement('li');
      li.innerText = country.name;
      ul.appendChild(li);
    }
    return ul;
  },

  renderDropdown: function () {
    var select = document.createElement('select');
    var option = document.createElement('option');
    option.value = "Germany";
    option.label = "Germany";
    select.add(option);

    return select;
  },

  render: function (countries) {
    var container = document.getElementById('countries');
    var list = this.renderCountries(countries);
    var select = this.renderDropdown();
    container.appendChild(select);
    container.appendChild(list);

  }


}

module.exports = UI;
