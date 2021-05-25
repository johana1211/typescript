const express = require("express");
const path = require("path");

//webpack
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config");
const app = express();

//middleware
app.use(webpackDevMiddleware(webpack(config)));

app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("server on port 3000");
});
