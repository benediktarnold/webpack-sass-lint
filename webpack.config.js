var HtmlWebpackPlugin = require('html-webpack-plugin');
var sassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style!css!sass?includePaths[]=./node_modules'}
        ]
    },

    plugins: [
      new sassLintPlugin({
         context: './src/styles',
      }),
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ],
};