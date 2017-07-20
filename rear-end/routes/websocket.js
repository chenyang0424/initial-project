var ws = require("nodejs-websocket"),
websocket,
socketserver = ws.createServer((conn) => {
  console.log("New connection");
  websocket = conn;
  conn.on("text", function (str) {
    console.log("Received "+str)
    conn.sendText(str.toUpperCase()+"!!!")
	});
	conn.on("close", function (code, reason) {
    console.log("Connection closed")
	});
});

module.exports = { websocket, socketserver };