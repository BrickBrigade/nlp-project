# <mark>nlp-project</mark>

## Description
This is a simple web app that takes a url to an article and evaluates the subjectivity and polarity of the article as well as the first four sentences of the article.

## How to run the app
1. Type ``npm i; npm run build-prod; npm start`` into the terminal
2. In your web browser, enter ``localhost:`` followed by the port called in the console
	 - Result for port 8080 would look like ``localhost:8080`` or ``https://localhost:8080/``

## Dependencies

### Loaders
- Loader list
  - babel-loader
  - sass-loader
  - css-loader
  - style-loader
- Loader config (in dev and prod webpack config files)
~~~
      module: {
        rules: [
          {
            test: /\.js$/
            exclude: /node_modules/
            loader: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
~~~

### Plugins
- html-webpack-plugin
  - adds a optimized html file to the dist folder
- clean-webpack-plugin
  - removes old build folders upon rebuild

### Build Tool
- webpack
  - configs
    - webpack.dev.js
    - webpack.prod.js
- webpack-cli

### devDependencies
- "@babel/core"
- "@babel/preset-env"
  - used in [babel config file](.babelrc)

### Compatibility Dependencies
- form-data
  - allows us to authenticate request to MeaningCloud API
- cross-fetch
  - alternative fetch api that works with babel