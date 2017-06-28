var MongoClient = require("mongodb").MongoClient;

var BucketQuery = function () {
  this.url = "mongodb://localhost:27017/bucket";
}

BucketQuery.prototype = {

  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      if(err) return;
        var collection = db.collection('countries');
        collection.find().toArray(function (err, docs) {
          if(err) return;
           onQueryFinished(docs);
        });
    });
  }

}

module.exports = BucketQuery;
