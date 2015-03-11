var webpack = require('webpack');
module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  devtool: 'eval',

  plugins: [
    new webpack.DefinePlugin({
      ON_DEV: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      ON_TEST: process.env.NODE_ENV === 'test',
      ON_PROD: process.env.NODE_ENV === 'production',
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
    ]
  }
};
