## React Microfrontend Host-Remote System with Style Isolation

This is an Micro-frontend host remote system to load financial widgets implemented using React and Webpack module federation. Here the host application does module loading and dependency resolution of remote widget using the webpack module federation plugin.

The host application also provides a client message bus for the widget interoperability.

### Style Isolation:
In this application the widget(remote application) styles are isolated from host using style injection in shadow dom where the remotes are attached.

### Repository Management: 
This repository is a monorepo managed with lerna and yarn workspaces.

- `hostApp` is the host application (http://localhost:3000).
- `finWidget` is a standalone application which exposes `StockWidget` component (http://localhost:3001).

## Application Startup

### 1.Starting the Frontend App:

Run `yarn start`.

This will build and serve `hostApp` and `finWidget` on the ports 3000 and 3001 respectively.

### 2. Starting the Python API Service:

1. `cd finAPI/stockapi`

2. ` uvicorn main:app --reload`

## Applications

[### 1.Micro-frontend Host Application](https://madhavms.github.io/react-host-remote/)

The host application shell performs runtime integration and orchestration of the different widgets deployed separately.

![HostApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/HostApplication.gif)

[### 2Widget Showcase App](https://madhavms.github.io/remote-widgets/)

This is a showcase application for the different widgets published in MFE format.

![RemoteApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetShowcaseApp.gif)

## Application Features

### 1. Global Menu system for widget discovery

The host shell gets the menu config from the "menu and application discovery" services, based on which it builds the widget discovery menu.

![](https://github.com/madhavms/react-host-remote/blob/main/img/HostApplication.gif)

### 2. Onboarding Page for Microfrontend Apps

This onboarding screen is used by the app development teams to onboard their micro frontend application to the host application.
The form requires info such as the url of the remote entry file, app id, remote id and the label which would be displayed on the menu.


![](https://github.com/madhavms/react-host-remote/blob/main/img/OnboardingPage.gif)

### 3. Dark-Light Theme Support
![](https://github.com/madhavms/react-host-remote/blob/main/img/DarkMode.gif)

### 4. Client Message Bus for Widget Interoperability
Source Code: [Message Bus](https://github.com/madhavms/react-host-remote/tree/main/message-bus)

The client message bus is published as an npm package which can be used for interoperability among the seperately deployed widgets during runtime integration. Hence these widgets can be composed at runtime and still communicate with each other.

For exmaple here the stock price and market analysis widgets are composed together to work in unison using the client message API provided by the host shell. 

![](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetInteroperability.gif)

### 5. CLI for bundling as Federated Modules

The CLI shown below provides a consistent bundling strategy to the different app teams which develop, test and deploy their apps independantly. Also the CLI can issue warnings if the remote apps are using incompatible version of packages. 

Some libraries such as React will be made singleton for module federation and a single copy is shared across the different apps loaded at runtime. This is done to prevent multiple instances of the package which causes unintended consequences. 

So if the remote was running an older version of react they may have issues when its loaded at runtime and uses the version of React loaded by host shell. Hence the CLI issues warnings during bundling time of remote apps so that this issue could be mitigated.

![Bundler Warning](https://github.com/madhavms/react-host-remote/blob/main/img/BundlerWarning.png)

Usage: `./bundlerCli.js bundle`

Source Code: [Federated Bundler](https://github.com/madhavms/react-host-remote/blob/main/federatedBundler/bundlerCli.js)
