<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewRequest} from '../Actions/index';
import '../Form.css'

class RequestForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            description: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newRequest({ userId: this.state.userId, title: this.state.title, description: this.state.description })
    }

    onTextChange = (type) => {

    }
  
    render () {
        return (
            <div className="request-form">
                <form onSubmit={this.handleSubmit}>
                    Tenant Id: 
                    <input type="text" name="userId" onChange={(e)=> this.setState({ userId: e.target.value })}/>
                    <br/>
                    Brief Title: 
                    <input type="text" name="title" onChange={(e)=> this.setState({ title: e.target.value })}/>
                    <br/>
                    Request Description: 
                    <input type="text" name="description" onChange={(e)=> this.setState({ description: e.target.value })}/>
                    <br/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
} 
const mapDispatchToProps = (dispatch) => ({
    newRequest: (request) => dispatch(sendNewRequest(request))
})
    
export default connect(null, mapDispatchToProps)(RequestForm);
=======
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
>>>>>>> master
