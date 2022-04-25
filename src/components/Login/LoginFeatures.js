import Button from "../Button/Button";
import Input from "../Input/Input";
//import Error from "./Error/error"
import gmailLogo from "../../assets/images/svg/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
const LoginFeatures = (props) => {
  return (
    <div className="container">
      <Input placeholder="Email Address" size="large" />
      <Input placeholder="Password" size="large" />
      <Button value="Login" size="large" />
      {/* {props.error && <Error errMessage={props.error} />} */}
      <div>
        <Button variant="contained" fullWidth="true" gradient size="large">
          LOGIN
        </Button>
      </div>

      <a href="" className="forgot-password-txt">
        Forgot Password
      </a>

      <Divider />

      <a href="" className="login-using-txt">
        Login using
      </a>

      <div>
        <Button
          value="Gmail"
          variant="outlined"
          color="secondary"
          fullWidth="true"
          size="large"
        >
          <span>
            <img src={gmailLogo} className="gmail-icon" />
          </span>
          Gmail
        </Button>
      </div>
    </div>
  );
};

export default LoginFeatures;
