import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

export default function CustomizedButtons(props) {
  console.log(props);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    background: props.gradient
      ? " linear-gradient(90deg, rgba(0,130,202,1) 0%, rgba(0,177,255,1) 100%)"
      : "#00b3ff",
    // "&:hover": {
    //   backgroundColor: purple[700],
    // },
  }));

  return <ColorButton {...props}>{props.children}</ColorButton>;
}
