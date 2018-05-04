import React from 'react';
import RequestList from '../Containers/requestList';


const HomePage = () => 
    <div className="app-page" className="indent" >
        <div className="homepage">
            <h2> Ourpartment </h2>
            <h4> Request History </h4>
            <RequestList />
        </div>
    </div>
    
export default HomePage;