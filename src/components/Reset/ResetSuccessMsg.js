import React from 'react';
import successImg from "../../assets/images/images/checkmark.jpg";


function ResetSuccessMsg() {
      
    return (
        <>
          <header></header>
          <div class="resetMsg-container">
          <img class='successImg' src={successImg} />
            <p>Password reset link has been sent to  your registered email ID</p>
          </div>
        </>
      );
    };

    export default ResetSuccessMsg;