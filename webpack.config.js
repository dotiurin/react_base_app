const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./gpurg-react/public/index.html",
  filename: "./index.html"
});

module.exports = {
  output: {
    // TODO: uncomment if running with backend
    // path: __dirname + '/purg_helper/static',
    path: __dirname + '/gpurg-react/public',
    filename: 'bundle.js',
  },
  entry: {
    app: './gpurg-react/src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};