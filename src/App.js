import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import UserSignup from './components/UserSignup';
import TeamSignup from './components/TeamSignup';

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/users/signup">
          <UserSignup />
        </Route>
        <Route exact path="/teams/signup">
          <TeamSignup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
