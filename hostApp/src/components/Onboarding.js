import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";

const steps = [
  {
    title: "Welcome",
    body: "Use the global menu to discover available widgets and apps.",
  },
  {
    title: "Add Widgets",
    body: "Select a widget from the menu and add it to a workspace tab.",
  },
  {
    title: "Customize",
    body: "Drag, resize, and arrange widgets to build your dashboard.",
  },
];

const Onboarding = ({ mode = "light", onFinish }) => {
  const [step, setStep] = useState(0);
  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onFinish && onFinish();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Paper
        style={{
          padding: 24,
          maxWidth: 480,
          backgroundColor: mode === "dark" ? "#132f4c" : "#fafafa",
          color: mode === "dark" ? "#fff" : "#333",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {current.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {current.body}
        </Typography>
        <Box mt={2} textAlign="right">
          <Button variant="contained" color="primary" onClick={handleNext}>
            {step === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Onboarding;
