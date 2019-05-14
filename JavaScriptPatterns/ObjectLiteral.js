

(function() {

    var employeeDetails = {
        name: "Mayank",
        age: 12,
        designation: "Developer",
        getData: function() {
            alert("Hello");
        } 
    };

    var keyName = "name";

    console.dir(employeeDetails.name);
    console.dir(employeeDetails[keyName]);


    var JsonString = JSON.stringify(employeeDetails);

    console.log(JsonString);

    var otherData = JSON.parse(JsonString);

    console.log(employeeDetails)

    console.dir(employeeDetails)

})()