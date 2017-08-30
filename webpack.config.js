const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge')

const PATHS = {
	src: path.join(__dirname, "src"),
	component: path.join(__dirname, "component")
}

const common = {
	entry: [
		PATHS.src + '/component.js'
	],
	output: {
		filename: 'component.js',
		path: PATHS.component
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'postcss-loader',
						'sass-loader'
					]
				})
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('./component.css')
	]
}

const dev = {
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, "component")
	},
	watchOptions: {
		poll: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'component.html',
			template: PATHS.src + '/component.pug'
		})
	]
}

module.exports = env => merge(common, dev)