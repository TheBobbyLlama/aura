import React from "react";

export default class WithFormData extends React.Component {
  state = {
    formData: {},
  };
  handleChange = (e) => {
    console.log(this.state.formData);
    this.setState({
      ...this.state.formData,
      formData: { [e.target.name]: e.target.value },
    });
  };
  render() {
    return this.props.children(this.state.formData, this.handleChange);
  }
}

//return (
//   <WithFormData>
//     {(formState, handleChange) => {
//       return (
//         <form className="center-container" onSubmit={invokeFuncs}>
//           <Input
//             placeholder="Email Address"
//             size="large"
//             name="email"
//             value={formState.email}
//             onChange={handleChange}
//           />
//           <Input
//             placeholder="Password"
//             size="large"
//             type="password"
//             name="password"
//             value={formState.password}
//             onChange={handleChange}
//           />
//           <Button value="Login" size="large" />

//           {successResult ? (
//             <span className="loader "></span>
//           ) : (
//             errorShow && (
//               <Error errorMsg={errorShow} className="error-container" />
//             )
//           )}

//           <Button
//             variant="contained"
//             fullWidth={true}
//             gradient="true"
//             size="large"
//             type="submit"
//             disabled={disableBt}
//           >
//             LOGIN
//           </Button>

//           <a href="" className="forgot-password-txt">
//             Forgot Password
//           </a>

//           <Divider sx={{ marginBottom: -2 }} />

//           <a href="" className="login-using-txt">
//             Login using
//           </a>

//           <Button
//             value="Gmail"
//             variant="outlined"
//             color="secondary"
//             fullWidth={true}
//             size="large"
//           >
//             <span>
//               <img src={gmailLogo} className="gmail-icon" />
//             </span>
//             Gmail
//           </Button>
//         </form>
//       );
//     }}
//   </WithFormData>
// );
