function createcounter(){
    let countervalue = 0;

    return {
        increment: function(){
            countervalue++;
        },
        decrement: function(){
            countervalue--;
        },
        getvalue: function(){
            return countervalue;
        }
}
}

let counter1 = createcounter();
let counter2 = createcounter();

counter1.increment();
counter2.increment();
counter2.increment();

console.log(counter1.getvalue(), 'counter1');
console.log(counter2.getvalue(), 'counter2');