import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from "../../mockApi/auth.api";
// import WithFormData from "../../renderProps/WithFormData";
import { useFormLogic } from "../hooks/useFormLogic";

const LoginFeatures = (props) => {
  const [formState, setFormState, handleChange] = useFormLogic({
    initalFormState: {
      email: "",
      password: "",
      errorShow: "",
      successResult: false,
      disableBt: false,
    },
  });

  const invokeFuncs = (e) => {
    e.preventDefault();
    checkUserInfo(formState);
    timer();
  };

  const checkUserInfo = (initalFormState) => {
    setFormState({ ...formState, successResult: true, disableBt: true });
    const userPromise = login({
      email: initalFormState.email,
      passWord: initalFormState.password,
    });
    userPromise.then((res, rej) => {
      try {
        getErrorMessage(res.errorCode).then((r) =>
          setFormState({ email: "", password: "", errorShow: r.result })
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

  const timer = () => {
    setTimeout(() => {
      setFormState({ ...formState, successResult: false, disableBt: false });
    }, 1000);
  };

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

      {formState.successResult ? (
        <span className="loader "></span>
      ) : (
        formState.errorShow && (
          <Error errorMsg={formState.errorShow} className="error-container" />
        )
      )}

      <Button
        variant="contained"
        fullWidth={true}
        gradient="true"
        size="large"
        type="submit"
        disabled={formState.disableBt}
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
