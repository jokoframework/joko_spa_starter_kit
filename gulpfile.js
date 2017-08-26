const gulp = require('gulp')
const path = require('path')
const del = require('del')
const history = require('connect-history-api-fallback')
const $ = require('gulp-load-plugins')({
    pattern: ['*', '!jshint', '!connect-history-api-fallback']
});
const jetpack = require('fs-jetpack');

const environment = $.util.env.type || 'development'
const isProduction = environment === 'production'
const webpackConfig = require('./webpack.config.js')[environment]

const port = $.util.env.port || 9000
const src = 'src/'
const dist = 'dist/'
const tests = 'tests/'

gulp.task('scripts', () => {
    return gulp.src([webpackConfig.entry])
    .pipe($.webpackStream(webpackConfig))
    .on('error', function(error) {
        $.util.log($.util.colors.red(error.message))
        this.emit('end')
    })
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload())
})

gulp.task('html', () => {
    return gulp.src(src + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload())
})

gulp.task('styles', () => {
    return gulp.src(src + 'styles/main.scss')
    .pipe($.sass({ outputStyle: isProduction ? 'compressed' : 'expanded' }))
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.connect.reload())
})

gulp.task('serve', () => {
    $.connect.server({
        root: dist,
        port: port,
        livereload: {
            port: 35728
        },
        middleware: (connect, opt) => {
            return [ history() ]
        }
    })
})

gulp.task('static', (cb) => {
    return gulp.src(src + 'static/**/*')
    .pipe($.size({ title : 'static' }))
    .pipe(gulp.dest(dist + 'static/'))
})

gulp.task('watch', () => {
    gulp.watch(src + 'styles/**/*.scss', ['styles'])
    gulp.watch(src + 'index.html', ['html'])
    gulp.watch([src + 'app/**/*.js', src + 'app/**/*.hbs'], ['scripts'])
})

gulp.task('lint', () => {
    return gulp.src([src + 'app/**/*.js', tests + '**/*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
})

gulp.task('test', $.shell.task('npm test'))

gulp.task('clean', (cb) => {
    del([dist], cb)
});


gulp.task('environment', () => {
    const projectDir = jetpack;
    const appDir = jetpack.cwd('./' + src + 'app');
    const configFile = "./config/env_"+ environment + ".json";

    projectDir.copy(configFile, appDir.path('env.json'), { overwrite: true });
});

gulp.task('default', ['build', 'serve', 'watch'])

gulp.task('build', (cb) => {
    if (isProduction) {
        $.runSequence('clean', 'environment', 'lint', 'test', 'static', 'html', 'scripts', 'styles', cb)
    } else {
        $.runSequence('clean', 'environment', 'lint', 'static', 'html', 'scripts', 'styles', cb)
    }
})