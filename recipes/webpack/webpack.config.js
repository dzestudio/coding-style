module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel',
        query: {
          presets: [
            ['es2015']
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
