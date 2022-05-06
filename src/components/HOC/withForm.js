import React from "react";

export const withForm =()  => (WrappedComponent) =>{
    return class NewComponent extends React.Component{
        state ={
            formData : {}
        };

        handleChange =(e) =>{
            this.setState({
                formData : {[e.target.name] :e.target.value}
            });
        };

        render() {
            return (
              <WrappedComponent
                {...this.props}
                formData={this.state.formData}
                handleChange={this.handleChange}
              />
            );
          }
    }
}