import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";

import { login, getErrorMessage } from "../../api/mockLogin";

const LoginFeatures = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formBusy, setFormBusy] = useState(false);

  const doLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setFormBusy(true);

    // Hit login service.
    login({ email, passWord: password }).then((response) => {
      // Got an error?  Hit the error message service for more information.
      if (response.errorCode) {
        getErrorMessage(response.errorCode).then((response) => {
          // STILL got an error?  Try to get an error message for the new error.
          if (response.errorCode) {
            getErrorMessage(response.errorCode).then((response) => {
              setErrorMessage(
                response.result ||
                  "An error has occurred.  Please try again later."
              );
              setFormBusy(false);
            });
          } else {
            // Got an error message back from the service.
            setErrorMessage(response.result);
            setFormBusy(false);
          }
        });
      } else {
        // Success!
        alert(response.result.jwt);
        setFormBusy(false);
      }
    });
  };

  return (
    <form className="center-container" onSubmit={doLogin}>
      <Input
        placeholder="Email Address"
        size="large"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        disabled={formBusy}
      />
      <Input
        placeholder="Password"
        size="large"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        disabled={formBusy}
      />
      {errorMessage && <Error errorMsg={errorMessage} />}
      <div>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          gradient="true"
          size="large"
          disabled={formBusy}
        >
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
          fullWidth={true}
          size="large"
          startIcon={<img src={gmailLogo} className="gmail-icon" />}
          disabled={formBusy}
        >
          Gmail
        </Button>
      </div>
    </form>
  );
};

export default LoginFeatures;
