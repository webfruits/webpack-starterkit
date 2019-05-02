const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const version = require('./package.json').version;
let isProductionBuild = true
if (process.argv.indexOf('--mode=development') !== -1) {
  isProductionBuild = false
}

module.exports = {
  entry: {
    ['./js/app_v' + version]: ['./src/ts/index.ts']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.version': JSON.stringify('v' + require('./package.json').version),
      'process.env.production': isProductionBuild
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['./js/app_v' + version],
      filename: 'index.html',
      title: 'webfruits/webpack-starterkit',
      meta: {viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      ASSETS: path.resolve(__dirname, './src/assets')
    }
  },
  module: {
    rules: [
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {test: /\.svg$/, loader: 'svg-inline-loader', options: {removeSVGTagAttrs: false, idPrefix: true, classPrefix: true}},
      {test: /\.(eot|ttf|woff|woff2)$/, loader: 'url-loader'},
      {test: /\.(jpg|png|gif)$/, loader: 'file-loader', options: {name: '/images/[name].[ext]'}},
      {test: /\.scss$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]}
    ]
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  stats: {
    modules: true,
    modulesSort: 'size'
  }
}
