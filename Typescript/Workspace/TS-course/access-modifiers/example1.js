var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.getname = function () {
        return this.name;
    };
    user.prototype.setname = function (name) {
        return this.name = name;
    };
    user.prototype.getage = function () {
        return this.age;
    };
    user.prototype.setage = function (age) {
        return this.age = age;
    };
    return user;
}());
var userr = new user('John', 30);
userr.getname();
userr.getage();
userr.setname('John');
userr.setage(30);
console.log(userr.getname());
console.log(userr.getage());
