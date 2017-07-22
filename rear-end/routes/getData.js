var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send({ success : true, data : { init : "request successfully !" } });
    //next();
});

module.exports = router;
