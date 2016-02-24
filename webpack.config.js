var webpack = require("webpack");

module.exports = {
	context: __dirname + "/public/assets/js/",
	
    entry: "./main.js",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },	
	
	resolve: {
        root: __dirname + "/public/assets/bower_components"
    }
	
};