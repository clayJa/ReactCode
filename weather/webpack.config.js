var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
	'react', 'lodash', 'redux', 'react-redux', 'react-dom',
	'axios', 'babel-preset-stage-1', 'react-router', 'react-sparklines', 'redux-promise'
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [{
			use: ['style-loader', 'css-loader'],
			test: /\.css$/
		}, {
			use: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}],
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
};
