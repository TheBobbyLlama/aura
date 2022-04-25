import React from 'react';
import './Error.scss'

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMeg: this.props.errorMeg
        };
      }
      
      render() {
        return <span>
        <svg src="../../assets/images/svg/Exclamation_Circle_Red.svg" />
        <p>{this.state.errorMeg}</p>
        </span>;
      }
    };

    export default Error;