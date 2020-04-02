const path = require('path');
const { version } = require('./package');

module.exports = {
	defaultExample: true,
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
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};