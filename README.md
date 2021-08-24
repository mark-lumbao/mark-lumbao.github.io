# React Typescript Boilerplate

`by: Mark Anthony Lumbao`

## Steps

1. Initialize npm then install react and react-dom

    ```bash
    npm init -y
    npm i react react-dom
    npm i -D @types/react @types/react-dom typescript
    ```

2. Initialize git and configure **.gitignore**

    ```bash
    git init
    ```

    ***gitignore content:***

    ```bash
    node_modules
    public
    ```

3. Add your tsconfig.json or create your own using `npx tsc --init`

    ```json
    {
      "compilerOptions": {
        "baseUrl": "src",
        "target": "es2017",
        "module": "esnext",
        "sourceMap": true,
        "jsx": "react-jsx",
        "strict": true,
        "esModuleInterop": true,
        "noImplicitAny": true,
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "lib": ["dom","esnext"],
        "resolveJsonModule": true,
        "importHelpers": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "declaration": true
      },
      "include": ["**/*"],
      "exclude": ["node_modules", "public", "**/*spec.ts", "**/*test.ts"]
    }
    ```

4. Setup Webpack
    * Prerequisites

      ```bash
      npm i -D webpack webpack-cli ts-node @types/node @types/webpack webpack-dev-server tsconfig-paths cross-env
      ```

    * Babel

      ```bash
      npm i -D @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react
      ```

    * Loaders

      ```bash
      npm i -D babel-loader css-loader style-loader sass-loader sass
      ```

    * Plugins

      ```bash
      npm i -D html-webpack-plugin clean-webpack-plugin
      ```

    * Create **webpack-tsconfig.json** file

      ```json
      {
        "compilerOptions": {
          "module": "commonjs",
          "target": "es5",
          "esModuleInterop": true
        }
      }

      ```

    * Create **.babelrc** file

      ```json
      {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript"
        ]
      }
      ```

    * Create **webpack-config.ts** file

      ```ts
      import HtmlWebpackPlugin from 'html-webpack-plugin';
      import { CleanWebpackPlugin } from 'clean-webpack-plugin';
      import { Configuration } from 'webpack';

      const devServer = ({
        contentBase: `${__dirname}/public`,
        compress: true,
        publicPath: 'public',
        port: process.env.PORT || 1234,
        writeToDisk: true,
        historyApiFallback: true,
        overlay: {
          errors: true,
          warnings: true,
        },
        open: true,
      });

      const config: Configuration & { devServer: typeof devServer } = ({
        entry: `${__dirname}/src/index.tsx`,
        output: {
          path: `${__dirname}/public`,
          filename: '[fullhash].js',
          chunkFilename: '[chunkhash].js',
        },
        module: {
          rules: [
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            {
              test: /\.(sc|c)ss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              type: 'asset/resource',
            },
          ],
        },
        resolve: {
          modules: [
            'node_modules',
            'src',
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: 'React TS',
            template: `${__dirname}/src/template.html`,
            minify: true,
          }),
          new CleanWebpackPlugin(),
        ],
        devServer,
      });

      export default config;
      ```

5. Add Build and Development Starter scripts in **package.json**

    ```json
    "scripts": {
      "build": "cross-env TS_NODE_PROJECT=\"webpack-tsconfig.json\" webpack --progress --mode production",
      "start:dev": "cross-env TS_NODE_PROJECT=\"webpack-tsconfig.json\" webpack serve --hot --progress --mode development"
    },
    ```

6. Create your webpack template file: **src/template.html**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React TS</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
    </html>
    ```

7. Create your app root file: **src/index.tsx**

    ```tsx
    import { render } from 'react-dom';

    render(
      <div>React TS</div>,
      document.getElementById('root'),
    );

    ```

    By the way if you're planning to import static files like an image create this file:

    ```ts
    // declaration.d.ts
    declare module '*.jpg';
    declare module '*.jpeg';
    declare module '*.png';
    declare module '*.svg';
    declare module '*.mp4';
    declare module '*.gif';
    declare module '*.pdf';
    ```

8. Setup and Configure ESLint

    ```bash
    npm i -D eslint
    npx eslint --init
    ```

    ![eslint-screenshot](assets/eslint-choices.png)

    Add the following script in the rules section of your **.eslint.js**

    ```js
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-console': [
      1,
      {
        allow: [
          'error',
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-self-import': 0,
    'react/jsx-fragments': [
      2,
      'element',
    ],
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-useless-constructor': 0,
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    ```

    Don't forget to add the settings section of your **.eslint.js** for module resolution.

    ```js
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: [
            'src/',
            'node_modules',
          ],
          extensions: [
            '.js',
            '.ts',
            '.tsx',
          ],
        },
      },
    },
    ```

9. Finally `npm run hot` command for development mode or `npm run build` for building production mode.

## Help

For any questions contact me through [markanthonylumbao@gmail.com](mailto:markanthonylumbao@gmail.com).

[![buy mark.lumbao a coffee](assets/buy-me-coffee.png)](https://www.buymeacoffee.com/mark.lumbao)
