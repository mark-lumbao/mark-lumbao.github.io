/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');
// const purgecss = require('@fullhuman/postcss-purgecss')({

//   content: [
//     './src/**/*.ts',
//     './src/**/*.tsx',
//     './public/**/*.html',
//   ],

//   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
// });

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : [],
  ],
};
