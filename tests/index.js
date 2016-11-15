const path = require('path');
const sass = require('node-sass');

sass.render({
  file: path.resolve(__dirname, 'index.scss'),
}, (err, result) => {
  if (err) throw err
});