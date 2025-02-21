function createcounter() {
    var countervalue = 0;
    return {
        increment: function () {
            countervalue++;
        },
        decrement: function () {
            countervalue--;
        },
        getvalue: function () {
            return countervalue;
        }
    };
}
var counter1 = createcounter();
var counter2 = createcounter();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getvalue(), 'counter1');
console.log(counter2.getvalue(), 'counter2');
