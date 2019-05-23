import React from "react";
import ReactDOM from "react-dom";

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

    function inputNameDetails() {
        employeeDetailsObject.name = "Maynak Gupta";
        alert(employeeDetailsObject.name);
    }

    return (
        <div>
            <h1>My Name is:</h1> <input type="text" value={employeeDetailsObject.name} />
            <h2>My Age is: {employeeDetailsObject.age}</h2>
            <h3>My Designation is: {employeeDetailsObject.designation}</h3><hr></hr><br></br>
            <input type="button" onClick={inputNameDetails} />

        </div>
    )
}