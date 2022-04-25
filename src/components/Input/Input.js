import MUIInput from "@mui/material/Input";

const style = {
  paddingRight: "3px",
  paddingLeft: "3px",
  paddingTop: "8px",
  paddingRight: "8px",
  border: "2px solid lightgrey",
};

export default function Input(props) {
  return (
    <MUIInput variant="outlined" disableUnderline sx={style} {...props}>
      {props.children}
    </MUIInput>
  );
}
