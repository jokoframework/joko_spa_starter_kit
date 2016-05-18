/*eslint-env node*/

'use strict';

var gulp = require('gulp');

// Build our assets
gulp.task('assets',require('./tasks/assets'));

// Prepara un archivo (bundle) app.js con todo el código
// JS de nuestra aplicación listo para ser ejecutado
// dentro de un browser
gulp.task('browserify', require('./tasks/browserify'));

// Procesa estilos CSS de nuestra propia aplicación
// y los copia a paths.dest + '/css'
gulp.task('styles', require('./tasks/styles'));

// Procesa los JS y CSS de terceros (ejemplo: boostrap)
gulp.task('vendor', require("./tasks/vendor"));

// Ejecutamos estas tareas por defecto
gulp.task('default', ['assets', 'vendor', 'styles', 'browserify']);

// Ejecuta tareas por defecto y levanta server con endpoints de prueba
gulp.task('start:mock', ['default'], require('./tasks/serverMock'));
