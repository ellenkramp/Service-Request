import React from 'react';
import NewRequest from './requestButton';
import CompletedRequests from './completedRequests';
import InProgressRequests from './inProgressRequests';
import RequestForm from './requestForm';

const User = () => 
    <div className="indent" >
        <h2>Hi, User</h2>
        <NewRequest />
        <RequestForm />
        <CompletedRequests />
        <InProgressRequests />
    </div>

export default User;