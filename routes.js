var controllers = require('./controllers');
var docklet = require('./controllers/docklets');



var routes = function( app){

	app.get('/', controllers.index);

	app.get('/docklets', docklet.list)

}

module.exports  = routes;