//import button
//import input
//import Error
import Button from "@mui/material/Button";
const LoginFeatures = (props) => {
  return (
    <div className="container">
      <div>
        <Button variant="contained" fullWidth="true">
          {" "}
          Button
        </Button>
      </div>
      <div>
        <Button variant="contained"> Button</Button>
      </div>
      <p>ErrorMessage</p>
      <div>
        <Button variant="contained"> Button</Button>
      </div>

      {/* <Input placeholder="Email Address" />
      <Input placeholder="Password" />
      <Button value="Login" />
      {props.error && <Error errMessage={props.error} />} */}
      <div>
        <span className="">Forgot Password</span>
      </div>
      <div>
        <span className="login-using">Login using</span>
      </div>

      {/* <Button value="Gmail" svg="" /> */}
      <div>
        <Button variant="contained"> Button</Button>
      </div>
    </div>
  );
};

export default LoginFeatures;
