/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.jsx',
    './public/**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('cssnano')({
      preset: 'default',
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
  ],
};
