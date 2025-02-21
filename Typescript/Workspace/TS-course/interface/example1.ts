interface user{ 
    name: string;
    age: number;
    address?: string;
    email?: string;
}

function greetuser(user: user){
    console.log(`Hello ${user.name}`);
}

function loguserdetails(user: user){
    console.log(`User details: ${user.name}, ${user.age}, ${user.address}, ${user.email}`);
}

let user1 ={
    name: "John",
    age: 30,
    address: "123 Main St",
    email: "john@example.com"
}

let user2 ={
    name: "Jane",
    age: 25
}

greetuser(user1);
loguserdetails(user2);

// let user2: user = {
//     name: "Jane",
//     age: 25,
//     address: "456 Elm St",
