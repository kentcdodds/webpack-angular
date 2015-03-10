var path = require('path');
var prod = process.env.NODE_ENV === 'production';


module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: prod ? './dist' : './app'
  },

  context: here('app'),

  devtool: prod ? 'source-map' : 'eval',

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.png$/, loader: 'url?mimetype=image/png'},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
      {test: /\.js$/, loader: 'babel!jshint', exclude: /node_modules/},
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/res/[name].[ext]?[hash]'
      }
    ]
  },
};

function here(p) {
  return path.resolve(__dirname, p);
}
