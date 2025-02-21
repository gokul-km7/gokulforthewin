var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var personn = /** @class */ (function () {
    function personn(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    personn.prototype.greet = function () {
        return "hello, ".concat(this.firstname, " ").concat(this.lastname);
    };
    personn.prototype.getage = function () {
        return this.age;
    };
    return personn;
}());
var userr = /** @class */ (function (_super) {
    __extends(userr, _super);
    function userr(firstname, lastname, age) {
        return _super.call(this, firstname, lastname, age) || this;
    }
    return userr;
}(personn));
var adminn = /** @class */ (function (_super) {
    __extends(adminn, _super);
    function adminn(firstname, lastname, age, role) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.role = role;
        return _this;
    }
    adminn.prototype.greet = function () {
        return "hello, ".concat(this.firstname, " ").concat(this.lastname, " role: ").concat(this.role);
    };
    return adminn;
}(personn));
var person111 = new personn("haaay", "den", 10);
var user111 = new userr("john", "doe", 20);
var admin111 = new adminn("jane", "doe", 30, "administrator");
console.log(person1.greet());
console.log(user1.greet());
console.log(admin1.greet());
