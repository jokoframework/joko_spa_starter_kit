var gulp  = require('gulp');
var paths = require('./paths');

/**
 * Move assets to build
 */
module.exports = function() {
    "use strict";

    gulp.src(paths.src + '/assets/**/*')
        .pipe(gulp.dest(paths.dest + '/assets/'));
};