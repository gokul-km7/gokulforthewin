var concat = function (a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
};
console.log(concat("1", "2", "3"));
console.log(concat("a", "b"));
