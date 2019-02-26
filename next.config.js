const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
module.exports = withTypescript(
  withImages(
    withSass(
      withCSS({
        webpack(config) {
          if (process.env.ANALYZE) {
            config.plugins.push(
              new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true
              })
            );
          }
          return config;
        },
        cssModules: true
      })
    )
  )
);
