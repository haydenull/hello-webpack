const path = require('path');

module.exports = {
  entry: __dirname + '/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // libraryTarget: 'commonjs2',
    // libraryExport: 'default',
  },
  mode: 'development',
  // mode: 'production',
  devtool: 'source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: [
  //             [
  //               '@babel/preset-env',
  //               {
  //                 // "targets": {
  //                 //   "esmodules": true
  //                 // },
  //                 // "modules": 'cjs'
  //               }
  //             ]
  //           ],
  //         }
  //       }
  //     }
  //   ]
  // }

}
