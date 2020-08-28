var path = require('path')

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
module: {
  loaders: [
    {
      test: /\.js/,
      loader: 'babel-loader',
      include: __dirname + '/src',
    }
  ],
  }
};
