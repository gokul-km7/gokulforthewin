var adult = /** @class */ (function () {
    function adult(name, age) {
        this.name = name;
        this.age = age;
    }
    adult.isadult = function (age) {
        return age >= 18;
    };
    return adult;
}());
console.log(adult.isadult(20));
console.log(adult.isadult(15));
