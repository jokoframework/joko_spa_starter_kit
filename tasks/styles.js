var gulp        = require('gulp');
var paths       = require('./paths');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

module.exports = function () {
   
  return gulp.src([
      paths.src + '/styles/main.css'
    ]).pipe($.sourcemaps.init())
    .pipe($.postcss([
      require('autoprefixer')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dest + '/css'))
    .pipe(reload({ stream: true }));
};