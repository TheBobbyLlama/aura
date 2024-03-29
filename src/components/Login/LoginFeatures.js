import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");

  const logInfo = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <form className="center-container" onSubmit={logInfo}>
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

      {errorShow && <Error errorMsg={errorShow} className="error-container" />}

      <Button
        variant="contained"
        fullWidth={true}
        gradient="true"
        size="large"
        type="submit"
      >
        LOGIN
      </Button>

      <Link to="/reset" className="forgot-password-txt">
        <span>Forgot Password</span>
      </Link>

      <Divider sx={{ marginBottom: -2 }} />

      <span className="login-using-txt">Login using</span>

      <Button
        value="Gmail"
        variant="outlined"
        color="secondary"
        fullWidth={true}
        size="large"
        startIcon={<GmailIcon />}
      >
        Gmail
      </Button>
    </form>
  );
};

export default LoginFeatures;

function GmailIcon() {
  return (
    <span>
      <img src={gmailLogo} className="gmail-icon" />
    </span>
  );
}
