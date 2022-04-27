import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";

import { login, getErrorMessage } from "../../api/mockLogin";

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [formIsLoading, setFormIsLoading] = useState(false);
  // const [errorShow, setErrorShow] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setFormIsLoading(true);

    login({ email, passWord: password }).then((res) => {
      if (res.errCode) {
        getErrorMessage(res.errorCode).then((res) => {
          if (res.errorCode) {
            getErrorMessage(res.errorCode).then((res) => {
              setErrMsg(
                res.result || "An error has occured. Please try again later."
              );
              setFormIsLoading(false);
            });
          } else {
            setErrMsg(res.result);
            setFormIsLoading(false);
          }
        });
      } else {
        console.log("success");
        alert(res.result.jwt);
        setFormIsLoading(false);
      }
    });
  }
  return (
    <form className="center-container" onSubmit={handleLogin}>
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

      {errMsg && <Error errorMsg={errMsg} className="error-container" />}

      <Button
        variant="contained"
        fullWidth={true}
        gradient="true"
        size="large"
        type="submit"
      >
        LOGIN
      </Button>

      <a href="" className="forgot-password-txt">
        Forgot Password
      </a>

      <Divider sx={{ marginBottom: -2 }} />

      <a href="" className="login-using-txt">
        Login using
      </a>

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
