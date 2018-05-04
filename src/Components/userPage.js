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

export default User;