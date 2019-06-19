const path = require('path');

module.exports = {
mode: "production", //or development
entry: './public/js/getFwlogsChart2.js', //where webpack should go first (entry file)
output: {
  path: path.resolve(__dirname, ''), //output path
  filename: 'bundle.js' //output file name
}
};