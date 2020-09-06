import React from 'react';
import './App.scss';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Signup />
    </div>
  );
};

export default App;
