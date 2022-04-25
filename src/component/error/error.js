import React from 'react'

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMeg: this.props.errorMeg
        };
      }
      
      render() {
        return <span>
        <img src="../../assets/images/images/error.png" />
        <p>{this.state.errorMeg}</p>
        </span>;
      }
    };

    export default Error;