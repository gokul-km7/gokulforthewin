class Company{
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getname(){
        return `hello, ${this.firstname} ${this.lastname}`;
    }

    getage(){
        return this.age;
    }

}

let company11 = new Company("John", "Doe", 30);
let company22 = new Company("Jane", "Mathew", 25);

console.log(company11.getname());
console.log(company22.getage());