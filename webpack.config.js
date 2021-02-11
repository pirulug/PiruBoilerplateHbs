const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js",
  },
  plugins: [
    // Extrae css
    new MiniCssExtractPlugin({
      filename: "css/app.css",
      chunkFilename: "css/app.css",
    }),
    // Copiar img fonts
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/fonts", to: "fonts" },
        { from: "src/img", to: "img" },
      ],
    }),
    // Copia los archivos a una carpeta public
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            { source: "./dist/**/*.css", destination: "./public/css" },
            { source: "./dist/**/*.js", destination: "./public/js" },
            { source: "./dist/img", destination: "./public/img" },
            { source: "./dist/fonts", destination: "./public/fonts" },
            { source: "./dist/*.html", destination: "./public" },
          ],
        },
      },
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "hbs", "pages", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),
      partials: [path.join(process.cwd(), "src", "hbs", "*", "*.hbs")],
    }),
  ],
  module: {
    // SCSS CSS Loader
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/[name].[ext]",
              outputPath: "fonts/",
              publicPath: "../fonts/",
            },
          },
        ],
      },
      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "../img/",
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 6969,
    open: true,
  },
};
