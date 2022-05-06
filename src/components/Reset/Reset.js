import React from 'react';
import companyLogo from "../../assets/images/svg/aura-logo-icon.svg";
import Button from "../Button/Button";
import AuraHeader from '../AuraHeader/AuraHeader'

class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
      }
      
      render() {
        return <><AuraHeader /><div class="content-container">
          <img className='fav-icon_svg' src={companyLogo} alt='companyLogo' />
          <br />
          <h3>Hi {this.state.errorMeg},</h3>
          <p>
            We've received a request to reset your password. If you didn't make this request,just ignore this email. Otherwise, you can rerset your password using this link:
          </p>
          <br />
          <div class='reset-btn'><Button
            variant="contained"
            fullWidth={false}
            size="large"
          >
            Reset My Password
          </Button></div>


          <p>Copyable link: link</p>
          <br />
          <br />
          <p class='thankyou'>Thank you</p>
          <p classs='team'>The Aura Team</p>
          <footer className='reset-footer'>&copy; Aura</footer>
        </div></>;
      }
    };

    export default Reset;