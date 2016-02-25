var webpack = require("webpack");

module.exports = {
	context: __dirname + "/public/assets/js/",
	
    entry: "./main.js",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },
	
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	]
	
	
};