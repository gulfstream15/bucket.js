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
    select.id = "countries-list";
    var option = document.createElement('option');
    option.value = "Germany";
    option.label = "Germany";
    select.add(option);

    var option1 = document.createElement('option');
    option1.value = "Spain";
    option1.label = "Spain";
    select.add(option1);

    return select;
  },

  renderForm: function () {
    var form = document.createElement('form');
    form.method = "POST";
    form.action = "/api/bucket";
    var button = document.createElement('input');
    button.type = "submit";
    form.appendChild(button);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var list = document.getElementById('countries-list');
      var name = list.selectedOptions["0"].value;
      var countryToAdd = {name: name};
      var query = new Query();
      query.add(countryToAdd, function (newData) {
        console.log(newData);
      })

    })

    return form;
  },

  render: function (countries) {
    var container = document.getElementById('countries');
    var list = this.renderCountries(countries);
    var select = this.renderDropdown();
    container.appendChild(select);
    container.appendChild(list);

    var form = this.renderForm();
    container.appendChild(form);
  }


}

module.exports = UI;
