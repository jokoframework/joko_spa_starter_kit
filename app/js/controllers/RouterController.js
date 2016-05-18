/**
 * 
 * @type Module app|Module app
 */

var RouterController = {
    
    showLoginView: function () {
        window.App.session.resetSession();
        window.app.vent.trigger('login:show');
    }
};


module.exports = RouterController;