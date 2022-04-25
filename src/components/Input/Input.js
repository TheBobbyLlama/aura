import MUITextField from "@mui/material/TextField";

export default function Input(props) {
  function generateInputStyle(props) {
    switch (props.size) {
      case "small":
        return {
          style: {
            padding: "4px 9px",
          },
        };
      case "medium":
        return {
          style: {
            padding: "7px 14px",
          },
        };
      case "large":
        return {
          style: {
            padding: "10px 20px",
          },
        };
      default:
        return {
          style: {
            padding: "7px 14px",
          },
        };
    }
  }

  const inputProps = generateInputStyle(props);

  return (
    <MUITextField
      variant="outlined"
      disableUnderline
      inputProps={inputProps}
      {...props}
    >
      {props.children}
    </MUITextField>
  );
}
