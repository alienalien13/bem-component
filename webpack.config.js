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
	output: {
		filename: '[name].js',
		path: PATHS.component
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
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
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('./component.css'),
		new HtmlWebpackPlugin({
			filename: 'component.html',
			template: PATHS.src + '/component.pug'
		})
	]
}

const dev = {
	entry: PATHS.src + '/index.js',
	output: {
		filename: '[name].js',
		path: PATHS.component
	},
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, "component")
	},
	watchOptions: {
		poll: true
	}
}

const prod = {
	entry: {
		'index': PATHS.src + '/index.js',
		'component': PATHS.src + '/component.js'
	},
	output: {
		filename: '[name].js',
		path: PATHS.component
	}
}

module.exports = env => env === 'development' ? merge(common, dev) : merge(common, prod)