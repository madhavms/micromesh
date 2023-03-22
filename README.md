## MicroMesh Microfrontend Platform

This is an Micro-frontend platform that performs run-time discovery, integration and orchestration of independantly deployed applications bundled in micro-frontend compatible format. Webpack module federation plugin was used to achieve runtime loading and orchestration of modules.


## Application Startup

### 1.Starting the Frontend App:

Run `yarn start`.

This will build and serve `hostApp` on the ports 3000.

### 2. Starting the Python API Service:

1. `cd finAPI/stockapi`

2. `uvicorn main:app --reload`

## Applications

### [1.MicroMesh App](https://madhavms.github.io/react-host-remote/)

The host application shell performs runtime integration and orchestration of the different widgets deployed separately.

![MicroMesh.gif](https://github.com/madhavms/react-host-remote/blob/main/img/MicroMesh.gif)

### [2.Widget Showcase App](https://madhavms.github.io/remote-widgets/) ([Source Code](https://github.com/madhavms/remote-widgets))

This is a showcase application for the different widgets published in MFE format.

![RemoteApplication.gif](https://github.com/madhavms/react-host-remote/blob/main/img/WidgetShowcaseApp.gif)

### [3.Widget Onboarding App](https://madhavms.github.io/onboarding-app/) ([Source Code](https://github.com/madhavms/remote-widgets))

This is an app to onboard the the react applications which are published in MFE format to the micfro-frontend platform. Once the widget is onboarded it will show up in the global discovery menu of the micro-frontend platform from where it can be accessed.

![OboardingApp.png](https://github.com/madhavms/onboarding-app/blob/main/Img/OboardingApp.png)

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
