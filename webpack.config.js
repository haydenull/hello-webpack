const path = require('path')

module.exports = {
  entry: __dirname + '/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
}