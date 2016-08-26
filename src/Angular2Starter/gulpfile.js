var gulp = require('gulp');
var merge = require('merge-stream');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var jsmin = require('gulp-jsmin');

var webroot = "./wwwroot/";
var clientDevRoot = "./ClientDev/";



var paths = {
    css: {
        sassSource: clientDevRoot + "Style/**/*.scss",
        appDestination: webroot + "css/app",
        libDestination: webroot + "css/lib",
        fontsDestination: webroot + "css/fonts"
    },
    js:
    {
        tsSource: clientDevRoot + "Scripts/**/*.ts",
        jsSource: clientDevRoot + "Scripts/**/*.js",
        mapSource: clientDevRoot + "Scripts/**/*.map",
        appDestination: webroot + "scripts/app",
        libDestination: webroot + "scripts/lib"
    },
    html: {
        source: clientDevRoot + "HTML/**/*.html",
        destination: webroot
    }
};

/* js library files */
gulp.task('angular_lib', function (done) {
    var taskRx = gulp.src([
        'node_modules/@angular/**/bundles/*',
    ]).pipe(gulp.dest(paths.js.libDestination + "/@angular"));
})

/* other js libraries */
gulp.task('other_lib', function (done) {
    var task1 = gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/core-js/client/shim.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/reflect-metadata/Reflect.js.map',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/systemjs/dist/system.js.map'
    ]).pipe(gulp.dest(paths.js.libDestination));
    var task2 = gulp.src([
        'node_modules/rxjs/**/*.js',
    ]).pipe(gulp.dest(paths.js.libDestination + '/rxjs'));
    var task4 = gulp.src([
       'node_modules/rxjs/**/*.map',
    ]).pipe(gulp.dest(paths.js.libDestination + '/rxjs'));
    var task3 = gulp.src([
        'node_modules/foundation/js/vendor/*.js',
    ]).pipe(gulp.dest(paths.js.libDestination));
    c
    return merge(task1, task2, task3, task4);
});

gulp.task('app_html', function () {
    return gulp.src(paths.html.source)
        .pipe(gulp.dest(paths.html.destination));

});

gulp.task('app_css', function () {
    return gulp.src(paths.css.sassSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css.appDestination))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.appDestination));

});

gulp.task('app_js', function (done) {
    var task1 = gulp.src([
        paths.js.jsSource
    ]).pipe(gulp.dest(paths.js.appDestination + '/dev'))
        .pipe(jsmin())
        .pipe(gulp.dest(paths.js.appDestination + '/dist'));
    var task2 = gulp.src([
        paths.js.mapSource
    ]).pipe(gulp.dest(paths.js.appDestination + '/dev'))
        .pipe(gulp.dest(paths.js.appDestination + '/dist'));

    return merge(task1, task2);
});

gulp.task('app_angular', ['app_js', 'app_html', 'app_css']);

gulp.task('lib_js', ['other_lib', 'angular_lib']);