const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { version } = require('./package');

module.exports = {
	title: 'Ethereal UI',
	version,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]" 
						},
					}),
				},
			],
		},
		plugins: [
			new ExtractTextPlugin("bundle.css"),
		],
	},
};