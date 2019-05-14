var globalData = "Window Data";

(function() {

    // This is Immediately Invoked Function Expression

    var otherDetails = "Dummy";

    function employeeDetails() {
        var name = "Mayank";
        var age = 10;
        var designation = "Developer";
        var salary = 10
        var bonus = 0;

        function incrementSalary(bonus) {

            var randomDataa = "Random";
            
            salary = salary + bonus;
            alert(globalData);
            alert(otherDetails);
            alert(salary);
        }

        return {
            name: name,
            age,
            designation,
            incrementSalary
        }
    }

    var myEmpData = employeeDetails();

    console.log(myEmpData.name);
    console.log(myEmpData.salary);

    myEmpData.incrementSalary(2);

})();