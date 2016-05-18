/**
 * SODEP S.A. (c) 2015
 * ErrorHandler
 */
var $ = require("jquery");
var noty = require("lib/notifier");

/**
 * Modulo encargado de manejar los errores globales de la aplicacion.
 * Actualmente solo maneja los AJAX errors a nivel jQuery
 * @type {{setupErrorHandling: Function}}
 */
var that = {
    /**
     * Configura el error handler de jQuery para manejar HTTP codes que no sean 2XX
     * Ref: http://api.jquery.com/jQuery.ajax/#jqXHR
     *
     * Actualmente maneja:
     * 1. status == 0: Errores de conexion
     * 2. status == 401: No hay autenticacion o la autenticación fue fallida
     * 3. status == 403: Error del lado del cliente
     * 4. status >= 500 && status < 600: Errores del lado del servidor
     * */
    setupErrorHandling: function() {
        var self = this;
        $(document).ajaxError(function(event, jqxhr, settings, exception) {
            var status = jqxhr.status;
            var msg;
            if (status === 0) {
                msg = "Error al tratar de conectarse al servidor. Por favor verifique su conexion a Internet.";
                noty.showErrorMsg(msg);
            } else if (status === 401 || status === 403) {
                msg = "Acceso prohibido o no autorizado a la aplicación";
                noty.showWarningMsg(msg);
               	console.log("Redirecting to login page");
                window.App.showLoginPage();		
            } else if (status === 405 || (status >= 500 && status < 600)) {
                msg = "Ha ocurrido un error inesperado. Favor intentar la operación de nuevo";
                noty.showErrorMsg(msg);
            } else if (status < 500) {
                // HANDLED BY THE APPLICATION
            }
        });
    }
};

module.exports = that;
