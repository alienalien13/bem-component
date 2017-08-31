const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge')

const PATHS = {
	src: path.join(__dirname, "src"),
	component: path.join(__dirname, "component"),
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
		new ExtractTextWebpackPlugin('./component.css'),
		new HtmlWebpackPlugin({
			filename: 'component.html',
			template: PATHS.src + '/component.pug'
		}),
	]
}

const dev = {
	entry: {
		'component': PATHS.src + '/component.js',
		'jquery': PATHS.src + '/jquery-3.2.1.js'
	},
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
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
}

const prod = {
	entry: {
		'component': PATHS.src + '/component.js'
	}
}

module.exports = env => env === 'development' ? merge(common, dev) : merge(common, prod)