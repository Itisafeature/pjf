import React, { useState } from 'react';
import './Signup.scss';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('/users/signup', {
        username,
        email,
        password,
        passwordConfirm,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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
          <span className="signin-link-span">
            or <a href="#">Signin</a>
          </span>
          <form className="signup-form" onSubmit={handleSignup}>
            <input
              type="text"
              className="signup-card-item"
              id="signup-username"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
          <button className="btn google-signin-btn">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
