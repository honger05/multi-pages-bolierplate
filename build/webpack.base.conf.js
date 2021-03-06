var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var bowerRoot = path.resolve(__dirname, '../src/bower_components/')

module.exports = {
  entry: {
    // zepto, lodash exposed by itself
    common: ['zepto', 'lodash', 'vue', 'utils']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: './js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'tmpl': path.resolve(__dirname, '../src/tmpl'),
      'vue': path.resolve(bowerRoot, 'vue/dist/vue'),
      'zepto': path.join(bowerRoot, 'zepto/zepto'),
      'lodash': path.join(bowerRoot, 'lodash/lodash'),
      'handlebars': path.join(bowerRoot, 'handlebars/handlebars'),
      'utils': path.resolve(__dirname, '../src/utils/utils')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, bowerRoot]
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: path.join(bowerRoot, 'vue/dist/vue'),
        loader: 'expose?Vue'
      },
      {
        test: path.resolve(__dirname, '../src/utils/utils'),
        loader: 'expose?Utils'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
