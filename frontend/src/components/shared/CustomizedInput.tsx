import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (probs: Props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "while" } }}
      name={probs.name}
      label={probs.label}
      type={probs.type}
      inputProps={{
        style: {
          width: "400px",
          borderRadius: "10",
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
};

export default CustomizedInput;
