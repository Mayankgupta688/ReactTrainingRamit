
// Constructor Function...

function EmployeeDetails(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
}


EmployeeDetails.prototype.showDetails = function() {
    console.log("Name: " + this.name + this.age);
}


EmployeeDetails.prototype.showName = function() {
    console.log("Name: " + this.name);
}

var myEmployee1 = new EmployeeDetails("Mayank", 10, "Designation");
var myEmployee1 = new EmployeeDetails("Mayank1", 10, "Designation");
var myEmployee3 = new EmployeeDetails("Mayank2", 10, "Designation");
var myEmployee4 = new EmployeeDetails("Mayank3", 10, "Designation");
var myEmployee5 = new EmployeeDetails("Mayank4", 10, "Designation");
var myEmployee6 = new EmployeeDetails("Mayank5", 10, "Designation");
var myEmployee7 = new EmployeeDetails("Mayank6", 10, "Designation");

myEmployee4.showDetails();


// Uses of New Keyword:

/*

1. It create a new memory location
2. Passes the memory address to "this" keyword on function execution
3. It adds the variables to the memory location in continuation
4. Return the memory location to the variable.

*/