class user {
    private name: string;
    private age: number;
    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getname(){
        return this.name
    }

    public setname(name: string){
        return this.name = name;
    }

    public getage(){
        return this.age
    }

    public setage(age: number){
        return this.age= age;
    }

}

const userr = new user('John', 30);

userr.getname();
userr.getage();

userr.setname('John');
userr.setage(30);

console.log(userr.getname());
console.log(userr.getage());