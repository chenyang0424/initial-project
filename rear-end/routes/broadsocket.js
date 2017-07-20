var ws = require("nodejs-websocket");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	ws.createServer((conn) => {
	    console.log("New connection");
	    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    	});
    	conn.on("close", function (code, reason) {
        console.log("Connection closed")
    	});
});
  next();
});

module.exports = router;