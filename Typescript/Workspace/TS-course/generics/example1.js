var stack = /** @class */ (function () {
    function stack() {
        this.items = [];
    }
    stack.prototype.push = function (item) {
        this.items.push(item);
    };
    stack.prototype.pop = function () {
        return this.items.pop();
    };
    return stack;
}());
var numberStack = new stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
var stringStack = new stack();
stringStack.push("1");
stringStack.push("2");
console.log(stringStack.pop());
