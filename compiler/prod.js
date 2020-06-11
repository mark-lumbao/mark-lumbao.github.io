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
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      deleteOriginalAssets: true,
    }),
  ],
};
