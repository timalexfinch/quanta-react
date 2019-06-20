import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label><strong>Name</strong></label><br />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <br />
                <label><strong>Job</strong></label><br />
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <br /><br />            
               <Button onClick={this.submitForm}>Submit</Button>
            </form>
        );
    }
}

export default Form;

// <button onClick={this.submitForm}>Submit</button>
// <input type="button" value="Submit" onClick={this.submitForm} />
// <Button onClick={this.submitForm}>Submit</Button>
