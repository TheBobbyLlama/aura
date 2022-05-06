import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
<<<<<<< HEAD

=======
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from '../../api/auth.api';

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [errorState, setErrorState] = useState("");
=======
  const [errorShow, setErrorShow] = useState("");
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5

  const logInfo = () => {
    return {
      email: email,
      passWord: password
    }
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    let user = logInfo();
    login(user)
      .then((res) => {
        let errorCode = res.errorCode;
        if (errorCode){
          getErrorMessage(errorCode).then((res) => {
          setErrorState(res.result);})
        } else{
          setErrorState();
        }
      });
  }

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

<<<<<<< HEAD
      {errorState && <Error errorMsg={errorState} className="error-container" />}

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

=======
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

>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5
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
