
/*
 * GET home page.
 */

exports.index = function(req, res){

	//TODO : show docklets screen
	res.redirect("/docklets")
	//res.render('index', { title: 'Docklet Dashboard' });
};