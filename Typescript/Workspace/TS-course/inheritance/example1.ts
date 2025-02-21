class personn {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    greet(){
        return `hello, ${this.firstname} ${this.lastname}`;
    }

    getage(){
        return this.age;
    }
}

class userr extends personn{
     constructor(firstname: string,lastname: string, age: number){
         super(firstname, lastname, age);
     }
    }

class adminn extends personn{
    role: string;
    constructor(firstname:string,lastname:string,age:number,role:string){
        super(firstname,lastname,age);
        this.role = role;
    }

    greet(){
        return `hello, ${this.firstname} ${this.lastname} role: ${this.role}`;
}


}

let person111 = new personn("haaay","den",10);
let user111 = new userr("john","doe",20);
let admin111 = new adminn("jane","doe",30,"administrator");

console.log(person1.greet());
console.log(user1.greet());
console.log(admin1.greet());