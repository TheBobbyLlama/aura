import React from 'react';
import './reset.scss';
import {success} from "../../assets/images/svg/Checkmark_green.svg";


function ResetSuccessMsg() {
      
    return (
        <>
          <header></header>
          <div class="content-container">
            <svg src={success} />
            <p>Password reset link has been sent to tour registered email ID</p>
          </div>
        </>
      );
    };

    export default ResetSuccessMsg;