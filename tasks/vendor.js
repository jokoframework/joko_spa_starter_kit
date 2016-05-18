var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var concat  = require('gulp-concat');
var paths   = require('./paths');


// Compilamos archivos CSS de terceros (ejemplo: boostrap.css) y 
// los metemos todos en un mismo archivo: vendor.css
// 
// Copiaremos ese archivo a: paths.dest + '/css'
gulp.task('vendor-styles', function() {
  var stream = gulp.src([
      paths.vendor + 'styles/bootstrap.css',
      paths.vendor + 'styles/bootstrap-theme.css'
    ])
    .pipe(plumber())
    .pipe(concat("vendor.css"));

  //if (environment === 'production') {
   // stream.pipe(minify());
  //}

  stream.pipe(gulp.dest(paths.dest + 'css/'));
});

// Compilamos archivos JS de terceros (ejemplo: boostrap.js) y 
// los metemos todos en un mismo archivo: vendor.js
// 
// Copiaremos ese archivo a: paths.dest + '/js'
gulp.task('vendor-scripts', function() {
  var stream = gulp.src([
      paths.vendor + 'scripts/jquery.js',
      paths.vendor + 'scripts/bootstrap.js'
      //paths.vendor + 'scripts/underscore.js',
      //paths.vendor + 'scripts/backbone.js',
      //paths.vendor + 'scripts/backbone.syphon.js',
      //paths.vendor + 'scripts/backbone.marionette.js'
    ])
    .pipe(plumber())
    .pipe(concat("vendor.js"));

  //if (environment === 'production') {
  //  stream.pipe(uglify());
  //}

  stream.pipe(gulp.dest(paths.dest + 'js/'));
});

module.exports = function() {
  gulp.start('vendor-styles');  
  gulp.start('vendor-scripts');  
};