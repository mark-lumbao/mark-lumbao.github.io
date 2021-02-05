import Dotenv from 'dotenv-webpack';
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
  plugins: [
    ...plugins,
    new Dotenv(),
  ],
  devServer,
};
