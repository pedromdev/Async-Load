const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js?[contenthash]',
    chunkFilename: 'js/bundle.[name].js?[contenthash]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'sass-loader',
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?[contenthash]",
      chunkFilename: "css/bundle.[id].css?[contenthash]"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
  ]
};