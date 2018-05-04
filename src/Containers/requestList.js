import React from 'react';
import { connect } from 'react-redux';

let log = (thing) => {
    // console.log(thing);
    return thing;
}

const RequestList = ({ requests }) => {
    return ( <ul>
        { log(requests).map(request => { 
            return (<li key={request.title}> {request.title} </li>)
        })}
        </ul> 
    );
}

const mapStateToProps = (state)=> {
    return {
        requests: log(state.requests),
    };  
}

export default connect(mapStateToProps)(RequestList); 