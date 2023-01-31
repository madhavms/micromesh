## React Microfrontend Host-Remote System with Style Isolation

This is an Micro-frontend host remote system to load financial widgets implemented using React and Webpack module federation. Here the host application does module loading and dependency resolution of remote widget using the webpack module federation plugin.

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

### Dark-Light Theme Support
![](https://github.com/madhavms/react-host-remote/blob/main/img/DarkMode.gif)

### Client Message Bus for Widget Interoperability
[Message Bus Source Code](https://github.com/madhavms/react-host-remote/tree/main/message-bus)

The stock price and market analysis widgets are composed together to work in unison using the client message API provided by the host shell.

![](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetInteroperability.gif)


