import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyInfoLogin from './CompanyInfoLogin';
import Navbar from './Navbar';
import './Signup.scss';

const TeamSignup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const handleSignup = () => {};
  return (
    <>
      <Navbar obj="team" type="signup" />
      <div className="signup-container">
        <CompanyInfoLogin />
        <div className="signup-information">
          <div className="signup-card">
            <h2 className="signup-card-header">Signup</h2>
            <span className="signin-link-span">
              or <Link to="/teams/signin">Signin</Link>
            </span>
            <form className="signup-form" onSubmit={handleSignup}>
              <input
                type="text"
                className="signup-card-item"
                id="signup-username"
                placeholder="username"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                className="signup-card-item"
                id="signup-email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="signup-card-item"
                id="signup-password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="signup-card-item"
                id="signup-passwordConfirm"
                placeholder="password confirmation"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
              />
              <button className="btn signup-form-btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSignup;
