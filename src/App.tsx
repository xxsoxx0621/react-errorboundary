import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from "@material-ui/core";
import {Profile} from "./pages/Profile";
import {Router} from "@material-ui/icons";
import {SignIn} from './pages/SignIn';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <SignIn />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Router>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
