import MUITextField from "@mui/material/TextField";

const style = {};

export default function Input(props) {
  return (
    <MUITextField disableUnderline {...props}>
      {props.children}
    </MUITextField>
  );
}
