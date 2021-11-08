const path = require("path");

module.exports = {
  // Source file we have written
  entry: "./src/js/index.js",
  output: {
    // File that will be generated by Webpack
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};