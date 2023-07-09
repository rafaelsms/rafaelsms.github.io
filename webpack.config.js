const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
// 'terser-webpack-plugin' is already included in webpack
// https://webpack.js.org/plugins/terser-webpack-plugin/#getting-started
const TerserPlugin = require('terser-webpack-plugin');

const glob = require('glob');
const path = require('path');
const PATHS = {
	static: path.join(__dirname, 'static'),
	src: path.join(__dirname, 'src')
};

module.exports = {
	target: 'web',
	entry: './src/app.js',
	// mode: 'production', // 'production' mode already set in `npm run build`
	mode: 'development',
	devServer: {
		static: [
			// To serve favicon at '/static/'
			{
				directory: path.join(__dirname, 'static'),
				publicPath: '/static/'
			},
			// To serve index.html at root
			{
				directory: path.join(__dirname, 'static'),
				publicPath: '/'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`{${PATHS.static},${PATHS.src}}/**/*`, { nodir: true })
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				sideEffects: true
			}
		]
	}
};
