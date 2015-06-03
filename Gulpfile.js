'use strict';

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var sassInput = [
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

var fs = require('fs');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var packageInfo = require('./package.json');
var path = require('path');

// -----------------------------------------------------------------------------
// Dist
// -----------------------------------------------------------------------------

gulp.task('concat', function () {
  return gulp
    .src(sassInput)
    .pipe(plugins.concat('_include-media.scss'))
    .pipe(plugins.header(fs.readFileSync('./banner.txt', 'utf-8')))
    .pipe(plugins.replace(/@version@/, packageInfo.version))
    .pipe(gulp.dest('./dist'));
});


// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

gulp.task('test_libsass', function () {
  return gulp
    // Run all tests in `tests` folder with LibSass
    .src(['./tests/*.scss'])
    .pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
    // Clean the output to extract only the JSON part
    .pipe(plugins.replace(/\@charset \"UTF\-8\";/, ''))
    .pipe(plugins.replace(/\s*\.__\s*{\s*data:\s*/, ''))
    .pipe(plugins.replace(/\;\s*\}/, ''))
    // Rename the file
    .pipe(plugins.rename(function (path) {
      path.basename += '.libsass';
      path.extname = '.json';
    }))
    // Write it
    .pipe(gulp.dest('./tests/.tmp'));
});

gulp.task('test_rubysass', function () {
  return plugins
    // Run all tests in the `tests` folder with Ruby Sass
    .rubySass('./tests')
    .on('error', function (err) { console.error('Error!', err.message); })
    // Clean the output to extract only the JSON part
    .pipe(plugins.replace(/\@charset \"UTF\-8\";/, ''))
    .pipe(plugins.replace(/\s*\.__\s*{\s*data:\s*/, ''))
    .pipe(plugins.replace(/\;\s*\}/, ''))
    // Rename the file
    .pipe(plugins.rename(function (path) {
      path.basename += '.rubysass';
      path.extname = '.json';
    }))
    // Write it
    .pipe(gulp.dest('./tests/.tmp'));
});


gulp.task('test', ['test_libsass', 'test_rubysass'], function () {
  var item;

  return gulp
    // Parse all JSON files generated from tests
    .src('./tests/.tmp/*.json')
    .pipe(plugins.tap(function (file) {
      var content = file.contents.toString();
      try {
        var obj = JSON.parse(content);
        var chunks = path.basename(file.path).split('.');

        if (item !== chunks[0]) console.log(item = chunks[0]);

        // Log the result
        console.log('    ' + chunks[1] + ': ' + obj.fail + ' test(s) failing out of ' + obj.length);
      } catch (e) {
        // Or log an error
        console.error('Could not parse JSON file.');
      }
    }));
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['test', 'concat']);
