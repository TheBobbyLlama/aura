import LoginFeatures from "./LoginFeatures";

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
        <div className="title">
          <img /> /* Auro Pic */
          <h2>Aura</h2>
          <div className="info-container">
            <LoginFeatures errMessages={errMessages[e]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
