## React Host Remote Example

This is an Micro-frontend host remote system implemented using React and Webpack module federation. Here the host application does module loading and dependency resolution of remote systems using the webpack module federation plugin.

This repository is a monorepo managed with lerna and yarn workspaces.

- `hostApp` is the host application (http://localhost:3000).
- `finWidget` is a standalone application which exposes `StockWidget` component (http://localhost:3001).

In this application a stock price widget is loaded at runtime into a host system.

## Starting the App

Run `yarn start`.

This will build and serve `hostApp` and `finWidget` on the ports 3000 and 3001 respectively.

### Host Application Demo

![HostApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/HostApplication.gif)

### Remote Application Demo

![RemoteApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/RemoteApplication.gif)
