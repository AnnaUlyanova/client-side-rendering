module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map'
}
