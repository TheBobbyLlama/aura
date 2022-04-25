import MUITextField from "@mui/material/TextField";

const style = {
  "MuiOutlinedInput-input": {
    "& .MuiTextField-root00": {
      padding: "6px 16px",
      border: "2px solid lightgrey",
      lineHeight: "1.75",
    },
  },
};

export default function Input(props) {
  return (
    <MUITextField variant="outlined" disableUnderline sx={style} {...props}>
      {props.children}
    </MUITextField>
  );
}
