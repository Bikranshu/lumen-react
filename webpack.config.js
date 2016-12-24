var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/build');
var APP_DIR = path.resolve(__dirname, 'public/js');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query:
        {
          presets: ['es2015', 'react']
        }
      }
    ]
  } ,
  devServer: {
    historyApiFallback: true
}
};

module.exports = config;