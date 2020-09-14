import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import CompanyInfoLogin from './CompanyInfoLogin';
import './Signup.scss';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [code, setCode] = useState('');

  const handleSignup = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/signup', {
        username,
        email,
        password,
        passwordConfirm,
        code,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar obj="user" type="signin" />
      <div className="signup-container">
        <CompanyInfoLogin />
        <div className="signup-information">
          <div className="signup-card">
            <h2 className="signup-card-header">Signup</h2>
            <span className="signin-link-span">
              or <Link to="/users/signin">Signin</Link>
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
              <input
                type="text"
                className="signup-card-item"
                placeholder="team code"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
              <button className="btn signup-form-btn" type="submit">
                Sign Up
              </button>
            </form>
            <button className="btn google-signin-btn">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
