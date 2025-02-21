class adult{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    static isadult(age: number){
        return age >= 18;
    }
}

console.log(adult.isadult(20));
console.log(adult.isadult(15));