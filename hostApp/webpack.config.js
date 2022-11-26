const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const lookupRemoteEntryUrl = (port) => {
  return `//localhost:${port}/widgetRemote.js`;
};

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
        "Access-Control-Allow-Private-Network": true
    },
    port: 3000,
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/, 
        loader: 'svg-inline-loader'
      }
    ],
  },
  //http://localhost:3001/widgetRemote.js
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        finWidget: `finWidget@${lookupRemoteEntryUrl(3001)}`,
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
