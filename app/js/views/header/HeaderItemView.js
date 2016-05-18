/**
 * 
 * @type Module marionette|Module marionette
 */
var Marionette = require('marionette');
var Templates = require('joko-templates');

var HeaderItemView = Marionette.ItemView.extend({
    templateHelpers: function () {
        var user = window.App.session.user;
        return {
            // Transforma el modelo Backbone
            // a un objeto JSON, con los atributos
            // del modelo como propiedades del objeto:
            // model.get('attribute') => obj.attribute
            'user': user.toJSON()
        };
    },
    template: Templates.headerItemView,
    events: {
        'click #logout-link' : 'onLogoutClick'
    },
    onLogoutClick: function(evt) {
        if (evt) {
            evt.preventDefault();
        }
        window.App.session.logout({}, {
            success: function(res) {
                // Recargamos toda la pagina/aplicación
                // No usamos rutas de backbone. Consideramos
                // mejor hacer un reinicio, ya con la sesión
                // invalidada
                window.location.href = '/';
                
            }
        });
    }

});

module.exports = HeaderItemView;