import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="signup-navigation-container">
      <div className="signup-welcome-container">
        <img
          className="logo-img"
          src="project-tracker-logo.png"
          alt="company logo"
        ></img>
      </div>
    </nav>
  );
};

export default Navbar;
