import React from 'react';
import companyLogo from '../../assets/images/images/fav-icon.png'

class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
      }
      
      render() {
        return <div class="content-container">
        <img className='fav-icon_svg' src={companyLogo} />
        <h3>Hi {this.state.errorMeg},</h3>
        <p>
        We've received a request to reset your password. If you didn't make this request,just ignore this email. Otherwise, you can rerset your password using this link:
        </p>
        <br />
        <button>
            reset My Password
        </button>
        <p>Copyable link: link</p>
        <br />
        <p class='thankyou'>Thank you</p>
        <p classs='team'>The Aura Team</p>
        <footer className='reset-footer'>&copy; Aura</footer>
        </div>;
      }
    };

    export default Reset;