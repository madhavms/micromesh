import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding:24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: bold;
`;

const SubHeading = styled.h3`
  margin-top: 48px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
`;

const Image = styled.img`
  display: block;
  margin: 24px auto;
  max-width: 100%;
`;

const Code = styled.code`
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  padding: 4px 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

function ApplicationFeatures() {
  return (
    <Container>
      <Heading>Application Features</Heading>

      <SubHeading>1. Global Menu system for widget discovery</SubHeading>

      <Paragraph>
        The host shell gets the menu config from the "menu and application
        discovery" services, based on which it builds the widget discovery menu.
      </Paragraph>

      <Image
        src="https://raw.githubusercontent.com/madhavms/micromesh/main/img/MicroMesh.gif"
        alt="Widget Discovery Menu"
      />

      <SubHeading>2. Onboarding Page for Microfrontend Apps</SubHeading>

      <Paragraph>
        This onboarding screen is used by the app development teams to onboard
        their micro frontend application to the host application. The form
        requires info such as the url of the remote entry file, app id, remote
        id and the label which would be displayed on the menu.
      </Paragraph>

      <Image
        src="https://raw.githubusercontent.com/madhavms/micromesh/main/img/OnboardingPage.gif"
        alt="Onboarding Page"
      />

      <SubHeading>3. Dark-Light Theme Support</SubHeading>

      <Image
        src="https://raw.githubusercontent.com/madhavms/micromesh/main/img/DarkMode.gif"
        alt="Dark-Light Theme Support"
      />

      <SubHeading>4. Client Message Bus for Widget Interoperability</SubHeading>

      <Paragraph>
        The client message bus is published as an npm package which can be used
        for interoperability among the seperately deployed widgets during
        runtime integration. Hence these widgets can be composed at runtime and
        still communicate with each other.
      </Paragraph>

      <Paragraph>
        For example here the stock price and market analysis widgets are
        composed together to work in unison using the client message API
        provided by the host shell.
      </Paragraph>

      <Image
        src="https://raw.githubusercontent.com/madhavms/micromesh/main/img/WidgetInteroperability.gif"
        alt="Widget Interoperability"
      />

      <SubHeading>5. CLI for bundling as Federated Modules</SubHeading>

      <Paragraph>
        Some libraries such as React will be made singleton for module
        federation and a single copy is shared across the different apps loaded
        at runtime. This is done to prevent multiple instances of the package
        which causes unintended consequences.
      </Paragraph>

      <Paragraph>
        So if the remote was running an older version of react they may have
        issues when its loaded at runtime and uses the version of React loaded
        by host shell. Hence the CLI issues warnings during bundling time of
        remote apps so that this issue could be mitigated.
      </Paragraph>

      <Image
        src="https://github.com/madhavms/react-host-remote/blob/main/img/BundlerWarning.png?raw=true"
        alt="Bundler Warning"
      />

      <Paragraph>
        Usage: <Code>./bundlerCli.js bundle</Code>
      </Paragraph>

      <Paragraph>
        Source Code:{" "}
        <a href="https://github.com/madhavms/react-host-remote/blob/main/federatedBundler/bundlerCli.js">
          Federated Bundler
        </a>
      </Paragraph>
    </Container>
  );
}

export default ApplicationFeatures;