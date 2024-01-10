import { Button } from "@mui/material";
import React from "react";

const ButtonUtility = ({ style, variant, type, name }) => {
  return (
    <Button sx={style} variant={variant} type={type}>
      {name}
    </Button>
  );
};

export default ButtonUtility;
