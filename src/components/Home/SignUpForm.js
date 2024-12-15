import React, { useState } from "react";
import "./SignUpForm.css"; // Add your styles here or use inline styles.

const AuthForm = () => {
  // State to handle the toggle between sign-in and sign-up
  const [isSignIn, setIsSignIn] = useState(true);

  // Toggle function
  const toggle = () => {
    setIsSignIn((prevState) => !prevState);
  };

  return (
    <div id="container" className={`container ${isSignIn ? "sign-in" : "sign-up"}`}>
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}

        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                   Sign up here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>

      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className={`text ${isSignIn ? "sign-in" : "sign-up"}`}>
            <h2>{isSignIn ? "Welcome" : ""}</h2>
          </div>
          <div className={`img ${isSignIn ? "sign-in" : "sign-up"}`}></div>
        </div>
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
};

export default AuthForm;
