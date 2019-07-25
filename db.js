var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

 //var url = 'mongodb://localhost:27017/myproject';
var url = "mongodb+srv://shashi:shashi@cluster0-cywj6.mongodb.net/test?retryWrites=true&w=majority"


 MongoClient.connect(url, { useNewUrlParser: true } , function(err, db){
    assert.equal(null, err);
    console.log('Connected to db');
    db.close(db);
 });
/*
 const insertDocuments = function(db , callback){
    const collection = db.collection('documents')
    collection.insertMany([
        {a:1}, {a:2}, {a:3}
    ], function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log(result);
        callback(result);
    });
 }
 */
