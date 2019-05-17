

var employeeData = (function(name, age, designation) {
    var name = name;
    var age = age;
    var designation = designation;

    (function() {
        throw "Some Error"
    })();

    return {
        empName: name,
        empAge: age,
        empDesignation: designation
    }
})("Mayank", 10, "Developer")

function(name, age, designation) {
    var name = name;
    var age = age;
    var designation = designation;

    (function() {
        throw "Some Error"
    })();

    return {
        empName: name,
        empAge: age,
        empDesignation: designation
    }
}


console.log(employeeData.age);

// ** Working with Named and Anonymous Function (Benefits)

var userInfo = {};

var singletonData = function() {
    if(userInfo == {}) {

        fetch("someUrl").then((data) => {
            userInfo = data;
        })
    } else return userInfo;
}

var initialData = singletonData();
var refreshedData = singletonData();


