import React from 'react';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="signup-navigation-container">
      <div className="signup-welcome-container">
        <a href="#">
          <img
            className="logo-img"
            src="/project-tracker-logo.png"
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
        {location.pathname.includes('users') && (
            <a className="signin-link__team">Sign In as Team</a>
          ) && (
            <a href="/teams/signup" className="signin-link__team">
              Sign Up as Team
            </a>
          )}
        {location.pathname.includes('teams') && (
          <a className="signin-link">Sign In as User</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
