import React from 'react';

export default class WithFormData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formData: {}
        }
    }

    handleChange =(e) =>{
        this.setState({formData:{[e.target.name] : e.target.value} });
    };

    render(){
        return this.props.children(
            this.state.formData,
            this.handleChange
        );
    }
}