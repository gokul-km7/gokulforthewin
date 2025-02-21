function greetuser(user) {
    console.log("Hello ".concat(user.name));
}
function loguserdetails(user) {
    console.log("User details: ".concat(user.name, ", ").concat(user.age, ", ").concat(user.address, ", ").concat(user.email));
}
var user1 = {
    name: "John",
    age: 30,
    address: "123 Main St",
    email: "john@example.com"
};
var user2 = {
    name: "Jane",
    age: 25
};
greetuser(user1);
loguserdetails(user2);
// let user2: user = {
//     name: "Jane",
//     age: 25,
//     address: "456 Elm St",
