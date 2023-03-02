const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Private-Network": true,
    },
    port: 3001,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: (element) => {
                window["widget-style"] = element;
                var parent = options.target || document.head;

                parent.appendChild(element);
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "finWidget",
      library: { type: "var", name: "finWidget" },
      filename: "widgetRemote.js",
      exposes: {
        "./StockWidget": "./src/StockWidget.js",
        "./RiskWidget": "./src/RiskWidget.js",
        "./StockRiskWidget": "./src/StockRiskWidget.js",
        "./NewsWidget": "./src/NewsWidget.js"
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true }},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};
