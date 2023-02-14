## React Microfrontend Host-Remote System with Style Isolation

This is an Micro-frontend host remote system to load financial widgets implemented using React and Webpack module federation. Here the host application does module loading and dependency resolution of remote widget using the webpack module federation plugin.

The host application also provides a client message bus for the widget interoperability.

### Style Isolation:
In this application the widget(remote application) styles are isolated from host using style injection in shadow dom where the remotes are attached.

### Repository Management: 
This repository is a monorepo managed with lerna and yarn workspaces.

- `hostApp` is the host application (http://localhost:3000).
- `finWidget` is a standalone application which exposes `StockWidget` component (http://localhost:3001).

### Python Backend Serivce (Websocket Communication):
The widget receives dummy stock prices from the Websocket API written using Python FASTAPI framework. Websocket enables receiving real time stock price values.


### Starting the Frontend App:

Run `yarn start`.

This will build and serve `hostApp` and `finWidget` on the ports 3000 and 3001 respectively.

### Starting the Python API Service:

1. `cd finAPI/stockapi`

2. ` uvicorn main:app --reload`

### Host Application Demo

The host application shell performs runtime integration and orchestration of the different widgets deployed separately.

![HostApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/HostApplicationLatest.gif)

### Remote Application Demo

This is a showcase application for the different widgets published in MFE format.

![RemoteApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetShowcaseApp.gif)

## Application Features

### 1. Dark-Light Theme Support
![](https://github.com/madhavms/react-host-remote/blob/main/img/DarkMode.gif)

### 2. Client Message Bus for Widget Interoperability
[Message Bus Source Code](https://github.com/madhavms/react-host-remote/tree/main/message-bus)

The stock price and market analysis widgets are composed together to work in unison using the client message API provided by the host shell. This feature allows for runtime composition of seperately deployed widgets.

![](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetInteroperability.gif)

### 3. CLI for bundling as Federated Modules

The CLI shown below provides a consistent bundling strategy to the different app teams which develop, test and deploy their apps independantly. Also the CLI can issue warnings if the remote apps are using incompatible version of packages. 

Some libraries such as React will be made singleton and host will be loading the same to avoid multiple instance which has unintended effects and this will be shared by remote apps. So if the remote was running an older version of react they may have issues when loaded as micro-frontend. Hence the CLI issues warnings during bundling time so that this issue could be mitigated.

![Bundler Warning](https://github.com/madhavms/react-host-remote/blob/main/img/BundlerWarning.png)

Usage: `./bundler-cli.js bundle`

Source Code: [Federated Bundler](https://github.com/madhavms/react-host-remote/blob/main/federatedBundler/bundlerCli.js)
