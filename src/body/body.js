import React, { Component } from 'react';

class Body extends Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            role: '',
        } // end person
    } // end state
    
    handleFirstChange = (event) => {
        console.log('firstName:', event.target.value);
        this.setState({
            person: {
                ...this.state.person,
                firstName: event.target.value
            }
        },
        )
    }
    
    handleLastChange = (event) => {
        console.log('lastName:', event.target.value);
        this.setState({
            person: {
                ...this.state.person,
                lastName: event.target.value
            }
        },
        )
    }

    handleRoleChange = (event) => {
        console.log('role:', event.target.value);
        this.setState({
            person: {
                ...this.state.person,
                role: event.target.value
            }
        },
        )
    }
    
    handleClick =() =>{
        console.log(this.state.person);
    }
    
    
    render() {
        return (
            <div>
                <h3>Add a famous person!</h3>
                <input type='text' onChange={this.handleFirstChange} />
                <input type='text' onChange={this.handleLastChange} />
                <input type='text' onChange={this.handleRoleChange} />
                <button onClick={this.handleClick}> Console Log inputs</button>
                <p>Your famous person is {this.state.person.firstName} {this.state.person.lastName}, they became famous from {this.state.person.role}</p>
            </div>
        );
    }
} // end class Body

export default Body;