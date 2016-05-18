var Marionette = require('marionette');

var Router = Marionette.AppRouter.extend({
    appRoutes: {
        'login': 'showLoginView'
    }
});

module.exports = Router;