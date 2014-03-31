var $ = require("jquery")
var Backbone = require("backbone")
Backbone.$ = $;
window.Backbone = Backbone;

var AppRouter = Backbone.Router.extend({
    routes: {
    	"help/:id" :"help",
        "posts/:id": "getPost",
        "*actions": "defaultRoute" 
    },
    help :function(id){
    	alert("hi"+id);
    }
});
var app_router = new AppRouter;
app_router.on('route:getPost', function (id) {
    alert( "Get post number " + id );   
});


//Unhandled path
app_router.on('route:defaultRoute', function (actions) {
    alert( "Action not support : " + actions ); 
});
Backbone.history.start();