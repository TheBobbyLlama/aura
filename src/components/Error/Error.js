import React from "react";
import errorSvg from "../../assets/images/svg/Exclamation_Circle_Red.svg";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: this.props.errorMsg,
    };
  }

  render() {
    return (
      <div className="error-container">
        <img className="errorImg" src={errorSvg} />
        <span className="errorMsg">{this.state.errorMsg}</span>
      </div>
    );
  }
}

export default Error;
