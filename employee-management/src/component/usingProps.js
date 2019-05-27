import React from "react";
import ReactDOM from "react-dom";

var employeeDetailsObject = {}


ReactDOM.render(<EmployeeDetails></EmployeeDetails>, document.getElementById("root"));

function EmployeeDetails() {
    
    var employeeDetailsObject = {
        name: "Mayank",
        age: 10,
        designation: "Developer",
        address: {
            street: "Rohini",
            pinCode: "110085",
            state: "Delhi"
        }
    }

    return (
        <div>
            <h1>My Name is: {employeeDetailsObject.name}</h1>
            <h2>My Age is: {employeeDetailsObject.age}</h2>
            <h3>My Designation is: {employeeDetailsObject.designation}</h3><hr></hr><br></br>
            
            <EmployeeAddress address={employeeDetailsObject.address}></EmployeeAddress>

        </div>
    )
}

function EmployeeAddress(props) {

    console.dir(props)

    return (
        <div>
            <b>My Address is</b>

            <div>
                <b>My City Name is {props.address.state}</b>
            </div>
        </div>
    )
}