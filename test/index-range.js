/* global __dirname, describe, it */

const path = require('path');
const sassTrue = require('sass-true');
const sassFile = path.join(__dirname, 'index-range.scss');

sassTrue.runSass({ describe, it }, sassFile);
