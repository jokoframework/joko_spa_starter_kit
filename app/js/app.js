/**
 * Aplicación con métodos y estado global
 * 
 * @type Marionette Module
 */
var Backbone          = require('backbone');
var Marionette        = require("marionette");
var SessionModel      = require('./models/SessionModel');
var HeaderItemView    = require('./views/header/HeaderItemView');
var LoginItemView     = require('./views/login/LoginItemView');
var HomeLayoutView    = require('./views/HomeLayoutView');   
var ErrorHandler      = require('./errorhandler');
 
var App = new Marionette.Application();


// variable global de sesión
App.session = new SessionModel({});

// Contenedor de Regiones
App.addRegions({
   header: "#header-region",
   main: "#main-region",
   dialog: "#dialog-region"
});

App.showHeader = function () {
    if (!App.headerItemView) {
        App.headerItemView = new HeaderItemView();
        App.header.show(App.headerItemView);
    }
};

App.showHomePage = function() {
    App.homeLayoutView = new HomeLayoutView();
    App.main.show(App.homeLayoutView);
};

App.showLoginPage = function () {
    App.loginItemView = new LoginItemView();
    App.main.show(App.loginItemView);
};

App.showMainContent = function () {
    if (window.App.session.get('logged_in') === true) {
        App.showHeader();
        App.showHomePage();
        if (Backbone.history.fragment === '' || Backbone.history.fragment === 'login') {
            Backbone.history.navigate('home', {trigger: true});
        }
    } else {
        App.showLoginPage();
        Backbone.history.navigate('login');
    }
};
    

/**
 * Utilitario para navegar a una ruta
 * 
 * @param {type} route
 * @param {type} options
 * @returns {undefined}
 */
App.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

/**
 * Utilitario para ver cual es 
 * la ruta actual mostrada en la barra del navegador.
 * 
 * @returns {nm$_backbone.module.exports.history.fragment|Marionette Module.history.fragment|nm$_backbone.exports.history.fragment}
 */
App.getCurrentRoute = function () {
    return Backbone.history.fragment;
};


App.vent.on('login:show', App.showLoginPage);

App.on("start", function () {
    
    $('#loading-mask').hide();
    
    ErrorHandler.setupErrorHandling();
    
    App.showMainContent();
    
    console.log('Application started');
});

window.App = App;
module.exports = App;