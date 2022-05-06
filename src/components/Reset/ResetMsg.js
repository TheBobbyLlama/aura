import React from 'react';
import successImg from "../../assets/images/images/checkmark.jpg";
import Button from "../Button/Button";
import AuraHeader from '../AuraHeader/AuraHeader'

function ResetMsg(props) {

    return (
        <>
          <AuraHeader />
          <div class="resetMsg-container">
            <img class='successImg' src={successImg} />
            <p>Password reset successful</p>
            <br />
          <div class='resetMsg-btn'>
            <Button
              variant="contained"
              fullWidth={false}
              size="large"
            >
              CLICK HERE TO LOGIN
            </Button></div>
          </div>
        </>
      );
    };

    export default ResetMsg;