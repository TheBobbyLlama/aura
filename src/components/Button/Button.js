import MUIButton from "@mui/material/Button";
export default function Button(props) {
  const style = {
    background:
      props.gradient &&
      "linear-gradient(90deg, rgba(0,130,202,1) 0%, rgba(0,177,255,1) 100%)",
    textTransform: "none",
  };

  return (
    <MUIButton sx={style} {...props}>
      {props.children}
    </MUIButton>
  );
}
