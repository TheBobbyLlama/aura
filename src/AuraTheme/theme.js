import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b3ff",

      contrastText: "#fff",
      mainGradient:
        "linear-gradient(90deg, rgba(0,130,202,1) 0%, rgba(0,177,255,1) 100%)",
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
