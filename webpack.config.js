const path = require('path');

module.exports = {
  entry: './src/babel.js',
  mode:'development',
  output: {
    filename: 'babel.js',
    path: path.resolve(__dirname, 'lib')
  },
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		}]
	},
};