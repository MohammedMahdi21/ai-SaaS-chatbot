import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (probs: Props) => {
  return <TextField name={probs.name} label={probs.label} type={probs.type} />;
};

export default CustomizedInput;
