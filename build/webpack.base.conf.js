var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var bowerRoot = path.resolve(__dirname, '../src/bower_components/')

module.exports = {
  entry: {
    common: ['zepto', 'lodash', 'handlebars', 'utils']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: './js/[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
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
        test: path.join(bowerRoot, 'zepto/zepto'),
        loader: 'expose?$'
      },
      {
        test: path.join(bowerRoot, 'lodash/lodash'),
        loader: 'expose?_'
      },
      {
        test: path.join(bowerRoot, 'handlebars/handlebars'),
        loader: 'expose?Handlebars'
      },
      {
        test: path.resolve(__dirname, '../src/utils/utils'),
        loader: 'expose?Utils'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}