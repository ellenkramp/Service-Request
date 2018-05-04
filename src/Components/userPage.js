import React from 'react';
import NewRequest from './requestButton';
import CompletedRequests from './completedRequests';
import InProgressRequests from './inProgressRequests';


const User = ()=> 
    <div>
        <h2>Hi, User</h2>
        <NewRequest />
        <CompletedRequests />
        <InProgressRequests />
    </div>

//User page has: 
//New request button component
//Completed Requests component
//In Progress Requests component
//Request form when New Request Button is Clicked
export default User;