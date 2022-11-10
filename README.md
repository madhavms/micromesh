## React Host Remote Example

This is an Micro-frontend host remote system implemented using React and Webpack module federation. Here the host application does module loading and dependency resolution of remote systems using the webpack module federation plugin. 

This is a monorepo repository managed using lerna and yarn workspaces.

- `hostApp` is the host application.
- `finWidget` standalone application which exposes `StockWidget` component.

## Starting the App

Run `yarn start`. 

This will build and serve `hostApp` and `finWidget` on the ports 3000 and 3001 respectively.
