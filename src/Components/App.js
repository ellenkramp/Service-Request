import React from 'react';
import UserPage from './userPage'
import Home from './Home';
import ManagerPage from './managerPage';
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';

//All the routes will be handled from here
//App will have persistent navbar
//Login, User and Manager Pages
const App = () =>
  <div className="App">
    <div className="App-Nav">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/manager">Manager</Link>
      </nav>
    </div>
    <div>
      <Route path="/home" component={Home}/>
      <Route path="/user" component={UserPage}/>
      <Route path="/manager" component={ManagerPage}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </div>


export default App;
