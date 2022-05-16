const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    clean: true
  },
  // entry: "./public/boids/boidsmain.js",
  // output: {
  //   path: path.resolve(__dirname, "../dist"),
  //   filename: "boidsBundle.js",
  //   clean: true
  // },
  //   entry: "./public/boids/BoidsWorker.js",
  // output: {
  //   path: path.resolve(__dirname, "../dist"),
  //   filename: "boidsBundle-worker.js",
  //   clean: true
  // },
  //     entry: "./public/boids/oldboids/boidsmain.js",
  // output: {
  //   path: path.resolve(__dirname, "../dist"),
  //   filename: "boidsBundle-realmaybe.js",
  //   clean: true
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      publicPath: "./"
    })
  ]
}