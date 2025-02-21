class employees{
    name:string;

    static totalemployees: number =0;

    constructor(name:string){
        this.name=name;
        employees.totalemployees++;
    }

    getemp(){
        return this.name;
    }

    static gettotal(){
        return employees.totalemployees;
    }
}

console.log(employees.totalemployees, "employees at start");
const emp1 = new employees('John');
const emp2 = new employees('Jane');

console.log(emp1.getemp());
console.log(emp2.getemp());
console.log(employees.totalemployees, "employees at end");
