import React, { useState } from 'react';
import successImg from "../../assets/images/images/checkmark.jpg";

function ResetMsg(props) {

    return (
        <>
          <header></header>
          <div class="content-container">
            <img class='successImg' src={successImg} />
            <p>Password reset successful</p>
            <button>click here to login</button>
          </div>
        </>
      );
    };

    export default ResetMsg;