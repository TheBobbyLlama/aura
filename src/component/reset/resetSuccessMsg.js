import React from 'react';
import './reset.scss'

function ResetSuccessMsg() {
      
    return (
        <>
          <header></header>
          <div class="content-container">
            <svg src="../../assets/images/svg/Checkmark_green.svg " />
            <p>Password reset link has been sent to tour registered email ID</p>
          </div>
        </>
      );
    };

    export default ResetSuccessMsg;