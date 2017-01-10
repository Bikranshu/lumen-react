var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/build');
var APP_DIR = path.resolve(__dirname, 'public/js');

var config = {
  devtool: 'inline-source-map',
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        include : APP_DIR,
        loader : 'babel',
        query:
        {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  } ,
  devServer: {
    historyApiFallback: true
}
};

module.exports = config;