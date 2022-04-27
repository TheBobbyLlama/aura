import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
//import Error from "./Error/error"
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInfo = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="center-container">
      <Input
        placeholder="Email Address"
        size="large"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        size="large"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button value="Login" size="large" />
      {/* {props.error && <Error errMessage={props.error} />} */}
      <div>
        <Button
          variant="contained"
          fullWidth={true}
          gradient="true"
          size="large"
          onClick={logInfo}
        >
          LOGIN
        </Button>
      </div>

      <Link to="/reset" className="forgot-password-txt">
        <span>Forgot Password</span>
      </Link>

      <Divider />

      <span className="login-using-txt">Login using</span>

      <div>
        <Button
          value="Gmail"
          variant="outlined"
          color="secondary"
          fullWidth={true}
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
