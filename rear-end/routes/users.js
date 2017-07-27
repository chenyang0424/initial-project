var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var { Schema } = mongoose;
mongoose.Promise = global.Promise;
var promise = mongoose.createConnection('mongodb://localhost/test');
var movieSchema = new Schema({
    doctor   : String,
    title    : String,
    language : String,
    country  : String,
    year     : Number,
    summary  : String,
    poster   : String
});
var Movie = promise.model('Movie', movieSchema);

//mongod  --storageEngine mmapv1 --dbpath=E:\MongoDB\data

/* GET users listing. */
router.post('/', function(req, res, next) {
	let { client } = req.body;
	console.log(client);
	var moive = new Movie({
        title: '黑衣人三',
        doctor: '史密斯',
        year: 2018,
        country: '美国',
        language: '英语',
        summary: '好片'
	});

	moive.save(err => {
        if (err) {
            console.log('保存失败');
            return;
        } else
        console.log('saved!!!!!!!!!!!!!');
	});


	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods: PUT,POST,GET,DELETE,OPTIONS');
  res.send(client);
});

module.exports = router;
