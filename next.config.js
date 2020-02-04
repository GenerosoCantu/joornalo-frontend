const withCSS = require('@zeit/next-css')
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// module.exports =
//   withCSS({
//     webpack(config, options) {
//       config.optimization.minimizer = [];
//       config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

//       return config;
//     }
//   });

// const withBabelMinify = require('next-babel-minify')()
// module.exports = withBabelMinify()


// next.config.js
const path = require('path');
// const withSass = require('@zeit/next-sass');

const isDev = process.env.NODE_ENV !== 'production';

const assetPrefix = isDev ? '' : '';

const nextConfig = {
  amp: true,
  assetPrefix,
  distDir: 'build',
  generateEtags: false,
  pageExtensions: ['jsx', 'js'],
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ?
      process.env.LOCALE_SUBPATHS : 'none',
  },
  exportPathMap: async () => ({
    '/': {
      page: '/'
    },
    '/demo': {
      page: '/demo'
    },
    '/about': {
      page: '/about'
    },
  }),
  webpack(config) {
    const {
      resolve = {}, module = {},
    } = config;

    return {
      ...config,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.svg$/,
            use: [{
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true, // true outputs JSX tags
              },
            },
            ],
          },
          {
            test: /\.(woff|woff2|eot|ttf)$/,
            loader: 'file-loader',
            options: {
              publicPath: `${assetPrefix}/_next/static/font`,
              outputPath: 'static/font',
            },
          },
          {
            test: /\.(png|gif|jpg|webp|mp4)$/,
            loader: 'file-loader',
            options: {
              publicPath: `${assetPrefix}/_next/static/media`,
              outputPath: 'static/media',
            },
          },
        ],
      },
      resolve: {
        ...resolve,
        alias: {
          ...(resolve.alias || {}),
          '@src': path.join(__dirname, 'src'),
          '@config': path.join(__dirname, 'config'),
          '@utils': path.join(__dirname, 'utils'),
          '@stores': path.join(__dirname, 'stores'),
          '@static': path.join(__dirname, 'static'),
          '@constants': path.join(__dirname, 'constants'),
          '@components': path.join(__dirname, 'components'),
          '@service': path.join(__dirname, 'service'),
        },
      },
    };
  },
  webpackDevMiddleware: config => config,

};

module.exports = withCSS(nextConfig);