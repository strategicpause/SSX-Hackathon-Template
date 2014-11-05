var path = require("path");
var webpack = require("webpack");
module.exports = {
  // This is the main file that should include all other JS files
  entry: "./src/scripts/main.js",
  target: "web",
  debug: true,
  // We are watching in the gulp.watch, so tell webpack not to watch
  watch: false,
  // watchDelay: 300,
  output: {
    path: path.join(__dirname, "dist", "assets"),
    publicPath: "/assets/",
    // If you want to generate a filename with a hash of the content (for cache-busting)
    // filename: "main-[hash].js",
    filename: "main.js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    // Tell webpack to look for required files in bower and node
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ["", ".web.coffee", ".web.js", ".js.coffee", ".coffee", ".js",".json"]
  },
  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.js$/, loader: "jsx-loader" },
      { test: /\.coffee$/, loader: "jsx-loader!coffee-loader" }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ]),
  ]
};
