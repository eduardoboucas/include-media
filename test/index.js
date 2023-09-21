/* global __dirname */

const path = require('path');
const sassTrue = require('sass-true');
const sassFile = path.join(__dirname, 'index.scss');

sassTrue.runSass({ describe, it, sourceType: 'path' }, sassFile, {
  style: 'expanded',
  loadPaths: ['node_modules'],
});
