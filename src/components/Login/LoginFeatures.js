import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error"
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from '../../api/auth.api';

const LoginFeatures = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState("");

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
        if (errorCode !== 0){
          getErrorMessage(errorCode).then((res) => {
          setErrorState(res.result);})
        } else{
          setErrorState();
        }
        
      });
  }

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
      {errorState && <Error errorMsg={errorState} />}
      <Button value="Login" size="large" />
      {/* {props.error && <Error errMessage={props.error} />} */}
      <div>
        <Button
          variant="contained"
          fullWidth={true}
          gradient="true"
          size="large"
          onClick={handleFormSubmit}
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
