import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="signup-navigation-container">
      <div className="signup-welcome-container">
        <a href="#">
          <img
            className="logo-img"
            src="project-tracker-logo.png"
            alt="company logo"
          ></img>
        </a>
        <a className="learn-more" href="#">
          Learn More
        </a>
      </div>
      <div className="signup-form-navigation">
        <a className="signin-link" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
