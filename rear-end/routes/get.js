var express = require('express');
var router = express.Router();
var data = { success : true, data : { init : "request successfully !" } };
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.send(data);
  //res.send('respond with a resource');
  next();
});

module.exports = router;
