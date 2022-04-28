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
