import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { titleCase } from 'title-case';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ obj, type }) => {
  const oppObj = obj === 'user' ? 'team' : 'user';
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className="signup-navigation-container">
      <div className="signup-welcome-container">
        <Link to="/">
          <img
            className="logo-img"
            src="/project-tracker-logo.png"
            alt="company logo"
          ></img>
        </Link>
        <Link className="learn-more" to="/learn-more">
          Learn More
        </Link>
      </div>
      <div className="signup-form-navigation__mobile">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="navbar-link__toggle"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />

          {!collapsed && (
            <div className="navbar-link__container">
              <Link className="signup-link" to={`/${obj}s/signin`}>
                Sign In
              </Link>

              <Link className="signup-link" to={`/${oppObj}s/signin`}>
                Sign In as {titleCase(oppObj)}
              </Link>
              <Link className="signup-link" to={`/${oppObj}s/signup`}>
                Sign Up as {titleCase(oppObj)}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="signup-form-navigation__desktop">
        <Link to={`/${obj}s/signin`} className="signin-link">
          Sign In
        </Link>
        <Link to={`/${oppObj}s/signup`} className="signin-link">
          Sign Up as {titleCase(oppObj)}
        </Link>
        <Link to={`/${oppObj}s/signin`} className="signin-link">
          Sign In as {titleCase(oppObj)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
