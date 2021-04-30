const path = require('path');
// Plugin: For extracting css file
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Configuration for webpack
 */
module.exports = {
  module: {
    rules: [
      // SCSS File loader
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [ new MiniCssExtractPlugin({
    filename: 'style.css'
  }) ]
}
