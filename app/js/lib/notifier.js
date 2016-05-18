/**
 * SODEP S.A. (c) 2016
 * Modulo utilitario para generar mensajes.
 *
 * Wrapper de Noty.
 * 
 * Muestra un mensaje arriba en la página, el mensaje es fijo 
 * y se cierra con un botón a la derecha. 
 * 
 * El color de cada tipo de mensaje es customizado con un template de underscore que tiene
 * una clase de bootstrap para cada tipo de mensaje.
 */

var noty = require("noty");
var _    = require('underscore');

var that = {};
        
var _tpl = _.template('<div class="noty_message <%= typeClass %>"><span class="noty_text"></span><div class="noty_close"></div></div>');

var _options = {
    'layout': 'top',
    'error': {
        'template': _tpl({typeClass: 'alert-danger'})
    },
    'information': {
        'template': _tpl({typeClass: 'alert-info'})
    },
    'success': {
        'template': _tpl({typeClass: 'alert-success'})
    },
    'warning': {
        'template': _tpl({typeClass: 'alert-warning'})
    }
};

that.showNotification = function(msg, type) {
    var n = noty({
        text: msg,
        layout: _options.layout,
        type: type,
        timeout: false,
        modal: false,
        closeWith: ['button'],
        template: _options[type].template
    });
    return n;
};

that.showInfoMsg = function(msg) {
    that.showNotification(msg, "information");
};

that.showSuccessMsg = function(msg) {
    that.showNotification(msg, "success");
};

that.showWarningMsg = function(msg) {
    that.showNotification(msg, "warning");
};

that.showErrorMsg = function(msg) {
    that.showNotification(msg, "error");
};

module.exports = that;
