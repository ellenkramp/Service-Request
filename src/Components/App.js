import React from 'react';
import UserPage from './userPage'
import Home from './Home';
import ManagerPage from './managerPage';
import Profile from './Profile';
import { Route, NavLink } from 'react-router-dom';


const App = () =>
  <div className="app">
    <div className="app-Nav">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/manager">Manager</NavLink>
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
