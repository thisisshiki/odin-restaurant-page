const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // Use single quotes for consistency
  devServer: {
    watchFiles: ['./src/template.html'], // Use single quotes
    hot: true, // Add hot module replacement
    open: true, // Auto-open browser
    port: 8080 // Specify port explicitly
  }
});