var path = require('path');

module.exports = {
  entry: path.resolve(path.join('src', 'client', 'index.js')),
  output: {
    path: path.join(__dirname, 'src', 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(path.join('src', 'public'))
  }
};

