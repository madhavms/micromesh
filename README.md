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

The host application shown below has added a drag and drop functionality using the widget.

![HostApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/HostApplication.gif)

### Remote Application Demo

![RemoteApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/RemoteApplication.gif)

### Dark-Light Theme Support
![](https://github.com/madhavms/react-host-remote/blob/main/img/DarkMode.gif)

### Message Bus for Widget Interoperability

