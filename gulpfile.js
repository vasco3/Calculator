'use strict';

var browserify = require('gulp-browserify');
var del = require('del');
// var debug = require('gulp-debug');
// var envify = require('envify');
var gulp = require('gulp');
var gutil = require('gulp-util');
// var jsdoc = require('gulp-jsdoc');
// var minifyCss = require('gulp-minify-css');
// var react = require('gulp-react');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var appRoot = 'app';

gulp.task('clean', function (cb) {
    del(['public'], cb);
});

var entryPoints = [appRoot + '/scripts/main.js'];

gulp.task('sass', ['clean'], function () {
    gulp.src(appRoot + '/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('html', ['clean'], function () {
    gulp.src([appRoot + '/index.html'])
        .pipe(gulp.dest('public'));
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
            .pipe(gulp.dest('public'));
    } else {
        gulp.src(entryPoints, { read: false })
            .pipe(browserify({
                insertGlobals: false,
                transform: ['reactify', 'envify'],
                extensions: ['.jsx'],
                debug: true
            }))
            .pipe(gulp.dest('public'));
    }
});

gulp.task('default', ['sass', 'scripts', 'html']);

