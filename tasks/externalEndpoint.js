var gulp        = require('gulp');
var browserSync = require('browser-sync');
var url         = require('url');
var proxy       = require('proxy-middleware');
var reload      = browserSync.reload;

function externalApiFactory(externalApi) {
    return function externalApiFunc( ) {
      var proxyOptions = url.parse(externalApi);
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
    }

}

module.exports = externalApiFactory;