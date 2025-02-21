interface Person {
    name: string;
    age: number;
}

const jsondata = '{"name":"John", "age":22}';
const json= JSON.parse(jsondata) as Person;

console.log(json.name); // John
console.log(json.age); // 22
console.log(json.email); // undefined