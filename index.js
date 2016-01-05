var path = require('path');
var package = require('./package.json');

var entryPoint = require.resolve(package.name);
var distPath = path.join(path.dirname(entryPoint), 'dist');

module.exports = {
    includePath: distPath
};
