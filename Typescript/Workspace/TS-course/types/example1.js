var mystring = "Hello, world!";
var mynumber = 42;
var myboolean = true;

mystring = mynumber;
myboolean = mystring;
mynumber = myboolean;

console.log(mystring, mynumber, myboolean);