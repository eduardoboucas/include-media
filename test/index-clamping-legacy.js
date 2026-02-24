/* global __dirname, describe, it */

const path = require('path');
const sassTrue = require('sass-true');
const sassFile = path.join(__dirname, 'index-clamping-legacy.scss');

sassTrue.runSass({ describe, it }, sassFile);
