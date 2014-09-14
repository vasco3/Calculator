'use strict';

var browserify = require('gulp-browserify');
var del = require('del');
// var debug = require('gulp-debug');
var envify = require('envify');
var gulp = require('gulp');
var gutil = require('gulp-util');
// var jsdoc = require('gulp-jsdoc');
// var minifyCss = require('gulp-minify-css');
// var react = require('gulp-react');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var clientRoot = 'client';

gulp.task('clean', function (cb) {
    del(['static'], cb);
});

var entryPoints = [clientRoot + '/main.js'];

gulp.task('sass', ['clean'], function () {
    gulp.src(clientRoot + '/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('static'));
});

gulp.task('images', ['clean'], function () {
    gulp.src([clientRoot + '/onboarding/img/**/*'])
        .pipe(gulp.dest('static/onboarding/img/'));
});


gulp.task('html', ['clean'], function () {
    gulp.src([clientRoot + '/index.html'])
        .pipe(gulp.dest('static'));
});

gulp.task('scripts', ['clean'], function () {
    if (process.env.NODE_ENV === 'production') {
        gulp.src(entryPoints, { read: false })
            .pipe(browserify({
                insertGlobals: false,
                transform: ['reactify', 'envify'],
                extensions: ['.jsx'],
                debug: false
            }))
            .pipe(uglify())
            .pipe(gulp.dest('static'));
    } else {
        gulp.src(entryPoints, { read: false })
            .pipe(browserify({
                insertGlobals: false,
                transform: ['reactify', 'envify'],
                extensions: ['.jsx'],
                debug: true
            }))
            .pipe(gulp.dest('static'));
    }
});

gulp.task('default', ['sass', 'scripts', 'images', 'html']);

