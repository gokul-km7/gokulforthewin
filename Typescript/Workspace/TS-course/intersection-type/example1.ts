interface skcet{
    name: string;
    age: number;
}

interface psg {
    marks: number;
    rollno: number;
}

type skcetpsg = skcet & psg;

let skcetpsg1: skcetpsg = {name: "surya", age: 20, marks: 100, rollno: 123};