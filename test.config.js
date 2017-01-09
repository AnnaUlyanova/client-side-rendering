module.exports = {
  entry: './tests/index.loader.js',
  output: {
    path: __dirname,
    filename: './tests/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  node: {
    fs: 'empty'
  }
}
