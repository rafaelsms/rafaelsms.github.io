const path = require('path');

module.exports = {
	entry: {
		bundle: './frontend/app.js',
	},
	mode: 'production',
	//mode: 'development',
	target: "web",
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'static')
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			}
		]
	},
};
