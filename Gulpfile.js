'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var fs = require('fs');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var packageInfo = require('./package.json');
var sassdoc = require('sassdoc');
var path = require('path');
var gh = require('gh-pages');
var yaml = require('js-yaml');


// -----------------------------------------------------------------------------
// Dist
// -----------------------------------------------------------------------------

gulp.task('build', function () {
  return gulp
    .src([
      'src/_config.scss',
      'src/helpers/*.scss',
      'src/plugins/*.scss',
      'src/_media.scss'
    ])
    .pipe(plugins.concat('_include-media.scss'))
    .pipe(plugins.header(fs.readFileSync('./banner.txt', 'utf8')))
    .pipe(plugins.header('@charset "UTF-8";\n\n'))
    .pipe(plugins.replace(/@version@/, packageInfo.version))
    .pipe(gulp.dest('./dist'));
});


// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

gulp.task('test:libsass', function () {
  return gulp
    .src(['./tests/*.scss'])
    .pipe(plugins.sass());
});

gulp.task('test:rubysass', function () {
  return plugins
    .rubySass('./tests', { stopOnError: true })
    .on('error', function (err) {
      process.exit(1);
    });
});


gulp.task('test', ['build'], function () {
  gulp.start('test:libsass');
  gulp.start('test:rubysass');
});


// -----------------------------------------------------------------------------
// Sass API documentation
// -----------------------------------------------------------------------------

gulp.task('sassdoc', function () {
  var options = yaml.safeLoad(fs.readFileSync('.sassdocrc', 'utf-8'));
  options.dest = './sassdoc/documentation';
  options.verbose = true;
  options.package = require('./package.json');

  return gulp
    .src('src/**/*.scss')
    .pipe(sassdoc(options))
    .resume();
});


// -----------------------------------------------------------------------------
// GH-pages task
// -----------------------------------------------------------------------------

gulp.task('gh-pages', ['build', 'sassdoc'], function () {
  gh.publish(path.join(__dirname, 'sassdoc'), {
    add: true,
    message: 'Automatic SassDoc update from Gulp',
    logger: function(message) {
      console.log(message);
    }
  }, function(err) {
    if (err) console.log(err);
  });
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['build', 'test']);


// -----------------------------------------------------------------------------
// Deploy documentation task
// -----------------------------------------------------------------------------

gulp.task('deploy', ['gh-pages']);
