var mystring:string = "Hello, world!";
var mynumber:number = 42;
var myboolean:boolean = true;


mystring = mynumber;
myboolean = mystring;
mynumber = myboolean;

console.log(mystring, mynumber, myboolean);