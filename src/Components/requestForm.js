import React from 'react';
import '../Form.css'

const RequestForm =  () => {

    return (
        <div className="request-form">
            <form onSubmit={handleSubmit()}>
                Tenant Id: 
                <input type="text" name="userId"/>
                <br/>
                Brief Title: 
                <input type="text" name="title"/>
                <br/>
                Request Description: 
                <input type="text" name="description"/>
                <br/>
                <button> Submit </button>
            </form>
        </div>
    )
}

const handleSubmit = () => {

}
    
export default RequestForm;