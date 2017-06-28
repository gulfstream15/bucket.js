var Countries = function () {

}

Countries.prototype = {

  makeRequest: function (url, onRequestComplete) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
      if (request.status !=200) return;
      var jsonString = request.responseText;
      var resultsData = JSON.parse(jsonString);
      onRequestComplete(resultsData);
    });
    request.send();
  },

  all: function(onCountriesReady) {
    this.makeRequest('http://localhost:3000/api/bucket', onCountriesReady);
  }

}



module.exports = Countries;
