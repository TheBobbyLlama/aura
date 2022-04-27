import LoginFeatures from "./LoginFeatures";
import auroLogo from "../../assets/images/svg/aura-logo-icon.svg";

const Login = (props) => {
  const errMessages = {
    error: "Email ID does not exist",
    inactive: "User is inactive. Please contact the Admin",
    attempts:
      "Your account has been locked becuase of consecutive failed login attempts. Please try again in 1 minute",
    lockedAttempts:
      "Your account has been locked becuase of consecutive failed login attempts. Please try again in 30 minutes",
    credentialAttemps: "Invalid Credentials.Attempts Remaining: 2",
  };
  let data = {
    error: false,
    inactive: false,
    attempts: 0,
    lockedAttempts: 0,
    credentialAttemps: 0,
  };

  return (
    <div className="main-container">
      <div className="middle-container">
        <img src={auroLogo} className="auro-logo" />
        <div className="title">
          <div className="info-container">
            <LoginFeatures />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
