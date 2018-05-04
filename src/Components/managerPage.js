import React from 'react';

const ManagerPage = ()=> 
    <div className="app-page" className='indent'>
        <div className="manager-page">
            <h2>Hi, Manager</h2>
            <button> View Request History </button>
            <nav className="mgr-nav">
                <span> Pending Requests </span>
                <span> Completed Requests </span>
                <span> Canceled Requests </span>
            </nav>
        </div>
    </div>

export default ManagerPage;
