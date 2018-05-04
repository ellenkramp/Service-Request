import React from 'react';
import '../App.css'

import UserPage from './userPage'
import Home from './Home';
import ManagerPage from './managerPage';
import Profile from './Profile';
import { Route, NavLink } from 'react-router-dom';


const App = () =>
  <div className="app">
    <div className="app-nav">
      <nav>
        <ul className="nav-list">
          <li className="home-nav"><NavLink to="/home" activeClassName="active">Ourpartment</NavLink> </li>
          <li><NavLink to="/user" activeClassName="active">User</NavLink> </li>
          <li><NavLink to="/profile" activeClassName="active">Profile</NavLink> </li>
          <li><NavLink to="/manager" activeClassName="active">Manager</NavLink> </li>
        </ul>
      </nav>
    </div>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/user" component={UserPage}/>
      <Route path="/manager" component={ManagerPage}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </div>


export default App;
