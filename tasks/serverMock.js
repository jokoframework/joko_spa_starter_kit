
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var serverMock     = require('../server/api');
var reload      = browserSync.reload;

// Corremos el sever con API de prueba
// 1. Construimos archivos de vendor
// 2. Construimos nuestros propios estilos
// 3. Construimos JS para navegadores (browserify)
module.exports = function() {
  'use strict';

  var mockServerCb = {};
  var MOCK = true;
  if (MOCK) {
      mockServerCb = function(req, res, next) {
        serverMock(req, res, next);
      };
  }
  // Levanta un servidor HTTP
  // que ya tiene unos endpoints
  // de prueba implementados.
  browserSync({
    notify: false,
    port: 9000,
    ui: {
      port: 9001
    },
    server: {
      baseDir: ['public', 'app'],
      middleware: mockServerCb
    }
  });

  // miramos nuestro código
  // para detectar cambios y
  // recargar autom�ticamente
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/images/**/*',
    'public/js/**/*.js'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.css', ['styles']);
    
};

