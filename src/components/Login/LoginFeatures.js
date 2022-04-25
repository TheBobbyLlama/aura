//import button
//import input
//import Error

const LoginFeatures = (props) => {
  return (
    <div>
      <Input placeholder="Email Address" />
      <Input placeholder="Password" />
      <Button value="Login" />
      {props.error && <Error errMessage={props.error} />}

      <span className="">Forgot Password</span>
      <span className="">Login using</span>
      <Button value="Gmail" svg="" />
    </div>
  );
};

export default LoginFeatures;
