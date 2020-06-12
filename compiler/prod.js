import CompressPlugin from 'compression-webpack-plugin';
import {
  entry, output, resolve, rules, plugins,
} from './common';

module.exports = {
  entry,
  output,
  resolve,
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new CompressPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
        level: 11,
      },
      threshold: 10240,
      deleteOriginalAssets: true,
    }),
  ],
};
