var app = require("./app.js")
var http = require('http');
var CONFIG = require("config")



var server = http.createServer(app).listen( CONFIG.app.port, function () {
  console.log('Express server listening on port ',  CONFIG.app.port   );
});

