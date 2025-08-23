import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import moment from "moment";

const ClockWidget = () => {
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const id = setInterval(() => setNow(moment()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Paper style={{ padding: 16, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Current Time
      </Typography>
      <Typography variant="body1">{now.format("HH:mm:ss")}</Typography>
    </Paper>
  );
};

export default ClockWidget;
