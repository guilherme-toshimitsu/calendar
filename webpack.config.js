const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.json$/,
          loader: 'json',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, 'src', 'services', 'api'),
        '@assets': path.resolve(__dirname, 'src', 'assets'),
        '@commons': path.resolve(__dirname, 'src', 'commons'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@config': path.resolve(__dirname, 'src', 'config'),
        '@pages': path.resolve(__dirname, 'src', 'pages'),
        '@routes': path.resolve(__dirname, 'src', 'config', 'routes'),
        '@services': path.resolve(__dirname, 'src', 'services'),
        // "@svg": "svg-inline-loader?classPrefix!./src/assets/images/icons",
        '@utils': path.resolve(__dirname, 'src', 'commons/utils'),
      },
      extensions: ['.jsx', '.js', 'json'],
    },
  };
};
