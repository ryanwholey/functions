const path = require('path');

module.exports = {
	devtool: 'eval',
	entry: './spec/tests.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				include: /(spec)/,
				loader: 'babel-loader',
				options: {
                    presets: ['es2015', 'stage-0']
                }
			}
		],
	},
    resolve: {
        extensions: ['.js']
    },
	devServer: {
		port: 8080,
        contentBase: path.resolve(__dirname, 'build'),
	}
}
