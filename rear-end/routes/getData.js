var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', (req, res, next) => {
    //res.writeHead(200,{"Content-Type" : "application/x-www-form-urlencoded;charset=utf-8"});
    //res.set('Content-Type', 'text/javascript; charset=utf-8');
    res.send({ success : true, data : { init : "request successfully !" } });
/*

    res.send(data);
    next();*/
});

module.exports = router;
