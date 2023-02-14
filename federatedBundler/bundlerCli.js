#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commander = require("commander");

commander
  .command("bundle")
  .description("Bundle the React app as a federated module")
  .action(() => {
    const pkg = require(path.resolve(process.cwd(), "package.json"));

    const webpackConfig = {
      entry: pkg.webpackConfig.entryFile,
      mode: "development",
      output: {
        path: path.resolve(process.cwd(), "dist"),
        publicPath: pkg.webpackConfig.publicPath,
        filename:  pkg.webpackConfig.bundleFilename,
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
        ],
      },
      plugins: [
        new ModuleFederationPlugin({
          name: pkg.webpackConfig.moduleFederation.name,
          library: { type: "var", name: "appName" },
          filename: pkg.webpackConfig.moduleFederation.filename,
          remotes: {},
          exposes: pkg.webpackConfig.moduleFederation.exposes,
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
            ...Object.keys(pkg.dependencies)
              .filter((dep) => dep !== "react" && dep !== "react-dom")
              .reduce((obj, dep) => ({ ...obj, [dep]: {} }), {}),
          },
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
    };

    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error(`Error bundling the React app: ${err}`);
        process.exit(1);
      }

      console.log(
        stats.toString({
          colors: true,
        })
      );
    });
  });

commander.parse(process.argv);
