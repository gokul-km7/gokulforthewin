class stack <T>{
    private items: T[] = [];

    push(item:T){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
}

const numberStack = new stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());

const stringStack = new stack<string>();
stringStack.push("1");
stringStack.push("2");
console.log(stringStack.pop());