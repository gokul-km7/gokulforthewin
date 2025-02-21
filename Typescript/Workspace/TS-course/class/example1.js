var company = /** @class */ (function () {
    function company(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    company.prototype.getname = function () {
        return "hello, ".concat(this.firstname, " ").concat(this.lastname);
    };
    company.prototype.getage = function () {
        return this.age;
    };
    return company;
}());
var company1 = new company("John", "Doe", 30);
var company2 = new company("Jane", "Mathew", 25);
console.log(company1.getname());
console.log(company2.getage());
