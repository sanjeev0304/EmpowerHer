import React, { useState } from "react";
import "./SignUpForm.css"; // Add your styles here or use inline styles.
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const history = useHistory();

  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Registration successful!");
        console.log("Response:", data);

        history.push("/");
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
        console.error("Error:", error);
      }
    } catch (error) {
      setMessage("Network error occurred.");
      console.log(JSON.stringify(formData));
      console.error("Network error:", error);
    }
  };

  const [formDataSignIn, setFormDataSignIn] = useState({
    email: "",
    password: "",
  });

  const [messageSignIn, setMessageSignIn] = useState("");

  // Handle input changes
  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setFormDataSignIn({ ...formDataSignIn, [name]: value });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSignIn),
      });

      if (response.ok) {
        const data = await response.json();
        setMessageSignIn("Login successful!");
        console.log("Response:", data);
        history.push("/");
      } else {
        const error = await response.json();
        setMessageSignIn(`Error: ${error.message}`);
        console.error("Error:", error);
      }
    } catch (error) {
      setMessageSignIn("Network error occurred.");
      console.log(JSON.stringify(formDataSignIn));
      console.error("Network error:", error);
    }
  };
  // State to handle the toggle between sign-in and sign-up
  const [isSignIn, setIsSignIn] = useState(true);

  // Toggle function
  const toggle = () => {
    setIsSignIn((prevState) => !prevState);
  };

  return (
    <div
      id="signincontainer"
      className={`container ${isSignIn ? "sign-in" : "sign-up"}`}
    >
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <form
              className="form sign-up"
              id="signup-form"
              onSubmit={handleSubmit}
            >
              <div className="input-group" id="username">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="input-group" id="email">
                <i className="bx bx-mail-send"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-group" id="pasword">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit">Sign up</button>

              {message && <p>{message}</p>}

              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </form>
          </div>
        </div>
        {/* END SIGN UP */}

        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <form className="form sign-in" onSubmit={handleSubmitSignIn}>
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="email"
                  name="email"
                  value={formDataSignIn.email}
                  onChange={handleChangeSignIn}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  name="password"
                  value={formDataSignIn.password}
                  onChange={handleChangeSignIn}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit">Sign in</button>
              {messageSignIn && <p>{messageSignIn}</p>}
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </form>
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
