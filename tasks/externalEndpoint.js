var gulp        = require('gulp');
var browserSync = require('browser-sync');
var url         = require('url');
var proxy       = require('proxy-middleware');
var reload      = browserSync.reload;

module.exports = function() {

  var proxyOptions = url.parse('http://localhost:8080');
  proxyOptions.route = '/api';

  browserSync.init({
    server: {
      baseDir: ['public', 'app'],
      middleware: [proxy(proxyOptions)]
    }
  });

  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/images/**/*',
    'public/js/**/*.js'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.css', ['styles']);
};
