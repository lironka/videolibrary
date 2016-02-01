//var path = require("path");
//var webpack = require("webpack");
module.exports = {
  entry: [
    "./public/assets/bower_components/jquery-1.12.0/index.js",
    "./public/assets/bower_components/jquery.router/index.js",
    "./public/assets/bower_components/jquery.tmpl/index.js",
    "./public/assets/js/moves.js",
    "./public/assets/js/main.js"
  ],
  output: {
    path: __dirname,
    filename: "./public/build/bundle.js"
  }
};