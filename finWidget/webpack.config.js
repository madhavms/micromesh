const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3001,
    allowedHosts:['*','http://1395-149-22-129-209.ngrok.io']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "finWidget",
      library: { type: "var", name: "finWidget" },
      filename: "widgetRemote.js",
      exposes: {
        "./StockWidget": "./src/StockWidget.js"
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } }
    })
  ]
};
