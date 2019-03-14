const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/app.js'),
	output: {
		path: path.resolve(__dirname, 'webroot'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: path.resolve(__dirname, 'webroot')
				}
			},
			'css-loader',
			'sass-loader'
			]
		}
		]
	},
	plugins: [
	new MiniCssExtractPlugin({
		filename: 'bundle.css'
	})
	]
}
