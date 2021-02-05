import {
  entry, output, resolve, rules, plugins, devServer,
} from './common';

module.exports = {
  entry,
  output,
  resolve,
  module: {
    rules,
  },
  plugins,
  devServer,
};
