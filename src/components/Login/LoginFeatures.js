import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import gmailLogo from "../../assets/images/images/gmail-icon-svg-27.jpeg";
import Divider from "@mui/material/Divider";
import { login, getErrorMessage } from "../../mockApi/auth.api";
import { useFormLogic } from "../hooks/useFormLogic";
import { Formik } from "formik";

const LoginFeatures = (props) => {
  // const [formState, setFormState, handleChange] = useFormLogic({
  //   initalFormState: {
  //     email: "",
  //     password: "",
  //     errorShow: "",
  //     successResult: false,
  //     disableBt: false,
  //   },
  // });

  // const invokeFuncs = (e) => {
  //   e.preventDefault();
  //   checkUserInfo(formState);
  //   timer();
  // };

  const checkUserInfo = (initalFormState) => {
    // setFormState({ ...formState, successResult: true, disableBt: true });
    const userPromise = login({
      email: initalFormState.email,
      passWord: initalFormState.password,
    });
    // userPromise.then((res, rej) => {
    // try {
    // getErrorMessage(res.errorCode).then((r) =>
    //   setFormState({ email: "", password: "", errorShow: r.result })
    // );
    // } catch (error) {
    //   console.log(error);
    // }
    // });
  };

  // const timer = () => {
  //   setTimeout(() => {
  //     setFormState({ ...formState, successResult: false, disableBt: false });
  //   }, 1000);
  // };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",

        successResult: true,
        disableBt: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.errorShow = "Email Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.errorShow = "Invalid email address";
        } else {
          login({ email: values.email, passWord: values.password }).then(
            (res) =>
              getErrorMessage(res.errorCode).then((r) => {
                errors.errorShow = r.result;
                console.log(errors);
              })
          );
        }
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        isInitialValid,
        handleChange,

        handleSubmit,
        isSubmitting,
      }) => (
        <form className="center-container" onSubmit={handleSubmit}>
          <Input
            placeholder="Email Address"
            size="large"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            size="large"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button value="Login" size="large" />

          {
            // values.successResult ? (
            //   <span className="loader "></span>
            // ) : (
            // errors.errorShow && (
            <Error errorMsg={errors.errorShow} className="error-container" />
            // )
            // )
          }

          <Button
            variant="contained"
            fullWidth={true}
            gradient="true"
            size="large"
            type="submit"
            // disabled={formState.disableBt}
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
      )}
    </Formik>
  );
};

export default LoginFeatures;
