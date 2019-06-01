import React from "react";
import ReactDOM from "react-dom";


ReactDOM.render(<EmployeeDetails></EmployeeDetails>, document.getElementById("root"));

    
function GetAdditionalInfo(props) {
    return (
        <p>My Additional Info is: {props.additionalData} </p>
    )
}

class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 10,
            surname: "Gupta",
            designation: "Developer"
        }
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>My First Name is: {this.state.name}.. </p>
                <p>My Surname: {this.state.surname}.. </p>
                <p> My Age: {this.state.age}</p>
                <input type="button" value="Click Me" onClick={this.changeValue} /><br></br><br></br>
                <GetAdditionalInfo additionalData={this.state.designation}></GetAdditionalInfo>
                
                <ShowDetails name={this.state.name} initialDetails={this.state}></ShowDetails>

            </div>
        )
    }
}

class ShowDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            additionalData: "I Live in Delhi"
        }
    }
    render() {
        return (
            <div>
                <h1>Child Component</h1>
                <p>My Surname is: {this.props.initialDetails.surname}.. </p>
                <p>My Name is: {this.props.initialDetails.name} </p>

                <h2>Other Component</h2>
                <GetAdditionalInfo additionalData={this.state.additionalData}></GetAdditionalInfo>
            </div>
        )
    }
}



