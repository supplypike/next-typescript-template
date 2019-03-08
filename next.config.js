const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withImages(
    withSass({
      webpack(config) {
        if (process.env.ANALYZE) {
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static', // Fixes crashing caused by binding on same port twice https://github.com/zeit/next.js/issues/3910
              analyzerPort: 8888,
              openAnalyzer: true
            })
          );
        }
        return config;
      },
      cssModules: true,
      cssLoaderOptions: { localIdentName: '[name]__[local]__[hash:base64:5]' }
    })
  )
);
