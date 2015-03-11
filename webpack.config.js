module.exports = {
  entry: './index.js',
  context: __dirname + '/app',
  output: 'bundle.js',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.html$/, loader: 'raw'},
    ]
  }
};
