import WithFormData from "../../renderProps/withFormData"
import LoginFeatures from "./LoginFeatures"
import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error"
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, getErrorMessage } from '../../api/auth.api';


const LoginFeatureContainer =() =>{
    const [errorState, setErrorState] = useState("");

    const logInfo = (FormState) => {
        const user = login({
          email: FormState.email,
          passWord: FormState.password,
        });
        return user;}
    
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
    <WithFormData render={<LoginFeatures />}>
        {(formState, handleChange) =>{
        return (
        <div className="center-container">
        <Input
            placeholder="Email Address"
            size="large"
            name= "email"
            value={formState.email}
            onChange={handleChange}
        />
        <Input
            placeholder="Password"
            size="large"
            name='password'
            type="password"
            value={formState.password}
            onChange={handleChange}
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
  );}}

    </WithFormData>
    )}

export default LoginFeatureContainer