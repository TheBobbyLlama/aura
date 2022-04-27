import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from "../../mockApi/auth.api";

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");

  const logInfo = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

    checkUserInfo();
  };

  const checkUserInfo = () => {
    const user = login({ email: email, password: password });
    user.then((res, rej) => {
      if (res) {
        getErrorMessage(res.errorCode).then((r) => setErrorShow(r.result));
      } else {
        console.log(rej);
      }
    });
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
      <Button value="Login" size="large" />
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
      >
        <span>
          <img src={gmailLogo} className="gmail-icon" />
        </span>
        Gmail
      </Button>
    </form>
  );
};

export default LoginFeatures;
