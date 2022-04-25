import React from 'react'

class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
      }
      
      render() {
        return <>
        <svg src='../../assets/images/images/fav-icon.png' />
        <h3>Hi {this.state.errorMeg},</h3>
        <p>
        We've received a request to reset your password. If you didn't make this request,just ignore this email. Otherwise, you can rerset your password using this link:
        </p>
        <button>
            reset My Password
        </button>
        <p>Copyable link: link</p>
        <br />
        <br />
        <p class='thankyou'>Thank you</p>
        <p classs='team'>The Aura Team</p>
        <footer></footer>
        </>;
      }
    };

    export default Reset;