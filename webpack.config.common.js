const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outputPath = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;

module.exports = {
  context: __dirname,
  entry: "./src/App.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    modules: ["node_modules", "./src"],
    extensions: [".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader!sass-loader",
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        }),
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ExtractTextPlugin("bundle.css")],
  devServer: {
    port,
    historyApiFallback: true,
    publicPath: "/dist/",
  },
};
