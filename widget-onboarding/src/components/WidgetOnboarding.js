import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 300px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  color: green;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: red;
  margin-top: 20px;
`;

function WidgetOnboardingPage() {
  const [widgetUrl, setWidgetUrl] = useState("");
  const [appId, setAppId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [label, setLabel] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setWidgetUrl("");
    setAppId("");
    setRemoteId("");
    setLabel("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const widgetData = { url: widgetUrl, appId, remoteId };
    const menuData = { appId, label };
    axios
      .all([
        axios.post("http://127.0.0.1:8000/widgets/", widgetData),
        axios.post("http://127.0.0.1:8000/menu/", menuData),
      ])
      .then(
        axios.spread((widgetResponse, menuResponse) => {
          setSuccessMessage("Widget onboarded successfully!");
          resetForm();
          setErrorMessage("");
        })
      )
      .catch((error) => {
        console.log(error);
        setErrorMessage("Widget onboarding failed. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <PageWrapper>
      <h1>Widget Onboarding Page</h1>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Widget URL:</Label>
          <Input
            type="text"
            value={widgetUrl}
            onChange={(event) => setWidgetUrl(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>App ID:</Label>
          <Input
            type="text"
            value={appId}
            onChange={(event) => setAppId(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Remote ID:</Label>
          <Input
            type="text"
            value={remoteId}
            onChange={(event) => setRemoteId(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Label:</Label>
          <Input
            type="text"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            required
          />
        </InputWrapper>
        <Button type="submit">Onboard Widget</Button>
        {successMessage && (
          <SuccessMessage>Widget onboarded successfully!</SuccessMessage>
        )}
        {errorMessage && <ErrorMessage>Widget onboarding failed.</ErrorMessage>}
      </FormWrapper>
    </PageWrapper>
  );
}

export default WidgetOnboardingPage;
