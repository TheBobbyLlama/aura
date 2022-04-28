import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from "../../mockApi/auth.api";
import WithFormData from "../../renderProps/WithFormData";

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");
  const [successResult, setSuccessResult] = useState(false);
  const [disableBt, setDisableBt] = useState(false);

  const invokeFuncs = (e) => {
    e.preventDefault();
    checkUserInfo();
    timer();
  };

  const checkUserInfo = () => {
    setDisableBt(true);
    setSuccessResult(true);
    const userPromise = login({ email: email, passWord: password });
    userPromise.then((res, rej) => {
      try {
        getErrorMessage(res.errorCode).then((r) => setErrorShow(r.result));
      } catch (error) {
        console.log(error);
      }
    });
  };

  const timer = () => {
    setTimeout(() => {
      setDisableBt(false);
      setSuccessResult(false);
    }, 1000);
  };

  return (
    <WithFormData>
      {(formState, handleChange) => {
        return (
          <form className="center-container" onSubmit={invokeFuncs}>
            <Input
              placeholder="Email Address"
              size="large"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              size="large"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button value="Login" size="large" />

            {successResult ? (
              <span className="loader "></span>
            ) : (
              errorShow && (
                <Error errorMsg={errorShow} className="error-container" />
              )
            )}

            <Button
              variant="contained"
              fullWidth={true}
              gradient="true"
              size="large"
              type="submit"
              disabled={disableBt}
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
      }}
    </WithFormData>
  );
};

export default LoginFeatures;
