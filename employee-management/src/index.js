import React from "react";
import ReactDOM from "react-dom";


class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 10,
            surname: "Gupta"
        }
    }

    changeValue = () => {
        this.setState({
            surname: "Agarwal"
        });

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <b>Hello World... My First Name is: {this.state.name}.. {this.state.surname}. My Age: {this.state.age}</b><br></br><br></br>
                <input type="button" value="Click Me" onClick={this.changeValue} /><br></br><br></br>
                
                <ShowDetails name={this.state.name} initialDetails={this.state}></ShowDetails>

            </div>
        )
    }
}

function ShowDetails(props) {

    // Not Allowed.. Props cannot be updated if they are Values
    //props.name = "Ramit";

    // Allowed, but not recommended..
    props.initialDetails.name = "ramit";

    // Not Allowed.. Reassignment of Array or Object..
    props.initialDetails = {
        name: "Mayank",
        age: 10,
        surname: "Gupta"
    }

    return <div>My Surname is {props.initialDetails.surname}.. My Name is {props.initialDetails.name}</div>
}


ReactDOM.render(<EmployeeDetails></EmployeeDetails>, document.getElementById("root"));
