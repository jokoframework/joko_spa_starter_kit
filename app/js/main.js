/**
 * 
 * @type Module backbone|Module backbone
 */
var Backbone = require('backbone');
var App = require('./app');
var RouterController = require('./controllers/RouterController');
var Router = require('./routers/Router');

App.session.checkAuth({
    complete: function () {
        
        App.start();
        
        new Router({controller: RouterController});
        
        if (Backbone.history) {
            Backbone.history.start();
        }
    }
});