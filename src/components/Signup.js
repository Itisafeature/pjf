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
      <div className="signup-information"></div>
    </div>
  );
};

export default Signup;
