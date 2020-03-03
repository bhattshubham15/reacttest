import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import HomePage from './Components/HomePage';
import Login from './Components/Login';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/"> <HomePage /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;