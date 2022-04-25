import React from 'react';
import './reset.scss';
import {success} from "../../assets/images/svg/Checkmark_green.svg";

function ResetMsg() {
      
    return (
        <>
          <header></header>
          <div class="content-container">
            <svg src={success} />
            <p>Password reset successful</p>
          </div>
        </>
      );
    };

    export default ResetMsg;