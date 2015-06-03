'use strict';

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var sassInput = [
  'src/banner.scss',
  'src/_config.scss',
  'src/helpers/*.scss',
  'src/_media.scss'
];

var sassOptions = {
  errLogToConsole: true
};


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


// -----------------------------------------------------------------------------
// Dist
// -----------------------------------------------------------------------------

gulp.task('concat', function () {
  return gulp
    .src(sassInput)
    .pipe(plugins.concat('_include-media.scss'))
    .pipe(gulp.dest('./dist'));
});


// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

gulp.task('test', function () {
  return gulp
    .src('./tests/tests.scss')
    .pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
    .pipe(gulp.dest('./tests'));
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['test', 'concat']);
