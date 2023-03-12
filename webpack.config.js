const path = require('path');

module.exports = {
	target: "web",
	entry: './src/app.js',
	mode: 'development', // 'production' used in `npm run build`
	devServer: {
		static: {
			directory: path.join(__dirname, 'static'),
			publicPath: '/'
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			}
		]
	}
};
