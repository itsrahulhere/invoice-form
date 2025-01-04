import { Typography } from "@mui/material";
import React from "react";

function InputLabel({ name }) {
  return (
    <div style={{ display: "flex" }}>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontWeight: 500,
          marginBottom: "4px",
        }}
      >
        {name} <span style={{ color: "red" }}>*</span>
      </Typography>
    </div>
  );
}

export default InputLabel;
