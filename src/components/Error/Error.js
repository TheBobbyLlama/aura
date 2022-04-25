import React from 'react';
import './Error.scss'
import {error} from '../../assets/images/svg/Exclamation_Circle_Red.svg'

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMeg: this.props.errorMeg
        };
      }
      
      render() {
        return <span>
        <svg src={error} />
        <p class='errorMeg'>{this.state.errorMeg}</p>
        </span>;
      }
    };

    export default Error;