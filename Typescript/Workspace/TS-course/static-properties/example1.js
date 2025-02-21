var employees = /** @class */ (function () {
    function employees(name) {
        this.name = name;
        employees.totalemployees++;
    }
    employees.prototype.getemp = function () {
        return this.name;
    };
    employees.gettotal = function () {
        return employees.totalemployees;
    };
    employees.totalemployees = 0;
    return employees;
}());
console.log(employees.totalemployees, "employees at start");
var emp1 = new employees('John');
var emp2 = new employees('Jane');
console.log(emp1.getemp());
console.log(emp2.getemp());
console.log(employees.totalemployees, "employees at end");
