const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname,'public/src');
const BUILD_DIR = path.resolve(__dirname, 'public/build');

const config = {
  entry: APP_DIR+'/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude:/node_modules/,
        include: APP_DIR,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude:/node_modules/,
        include: APP_DIR,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolveLoader:{
    modules:[
      path.join(__dirname, 'node_modules')
    ]
  }
}


module.exports = config;
