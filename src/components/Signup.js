import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-welcome">
        <div className="company-info">
          <h1 className="company-tagline">The Project Tracker of the Future</h1>
          <p className="company-summary">
            Project Tracker is a new and innovative way for teams to communicate
            with each other while tracking the status of projects.
          </p>
          <p className="company-summary">
            Keep your team informed and on the same page in order to be agile
            and efficient!
          </p>
        </div>
      </div>
      <div className="signup-information">
        <div className="signup-card">
          <h2 className="signup-card-header">Signup</h2>
          <span className="signin-link-span signup-card-item">
            or <a href="#">Signin</a>
          </span>
          <form className="signup-form">
            <input
              type="text"
              className="signup-card-item"
              id="signup-email"
              placeholder="email"
            />
            <input
              type="password"
              className="signup-card-item"
              id="signup-password"
              placeholder="password"
            />
            <button className="btn signup-form-btn" type="submit">
              Sign Up
            </button>
          </form>
          <button className="btn google-signin-btn">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
