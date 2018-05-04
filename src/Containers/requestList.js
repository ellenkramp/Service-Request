import React from 'react';
import { connect } from 'react-redux';

// let log = (thing) => {
//     console.log(thing);
//     return thing;
// }

const RequestList = ({ requests }) => {
    return ( <ul>
        { requests.map(request => { 
            return (<li key={request.title}> {request.title} </li>)
        })}
        </ul> 
    );
}

const mapStateToProps = (state)=> {
    return {
        requests: state.requests,
    };  
}

export default connect(mapStateToProps)(RequestList); 