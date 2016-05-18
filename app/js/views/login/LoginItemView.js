/**
 * 
 * @type Module marionette|Module marionette
 */
var Marionette = require('marionette');
require('parsleyjs');

// TODO Esto funciona mágicamente y 
// no se ni como. Investigar mejor
// y documentar
require('parsleyjs/dist/i18n/es');
require('jquery.joko');

var Templates  = require('joko-templates');
var notifier   = require('lib/notifier');

var ENTER_KEY = 13;

var LoginItemView = Marionette.ItemView.extend({
    template: Templates.loginItemView,
    events: {
        'click #login-btn': 'onLoginAttempt',
        'keyup #login-password-input': 'onPasswordKeyup'
    },
    onPasswordKeyup: function (event) {
        var k = event.keyCode || event.which;

        if (k === ENTER_KEY && $('#login-password-input').val() === '') {
            event.preventDefault();
        } else if (k === ENTER_KEY) {
            event.preventDefault();
            this.onLoginAttempt();
            return false;
        }
    },
    onLoginAttempt: function (event) {
        var self = this, userData;
        if (event) {
            event.preventDefault();
        }
        var valid = this.$('#login-form').parsley().validate();
        
        if (valid) {
            userData = {
                email: this.$('#login-mail-input').val(),
                password: this.$('#login-password-input').val()
            };

            this.$('#login-btn').loading(true);

            window.App.session.login(userData, {
                success: function (res) {
                    window.App.showMainContent();
                },
                error: function (jqXHR, textStatus) {
                    // no hacemos nada, el errorHandler
                    // se va a encargar de hacer todo
                },
                complete: function () {
                    self.$('#login-btn').loading(false);
                }
            });
        }
    }
});


module.exports = LoginItemView;