var hello = require("./hello1");

hello();

console.log(" - - - ");

var hello2 = require("./hello2").sayHello;
hello2();

console.log(" - - - ");

var hello3 = require("./hello3");
hello3.sayHello();
hello3.message = "Changed hello NodeJS !!!";
hello3.sayHello();

var hello32 = require("./hello3");
hello32.sayHello();

console.log(" - - - ");

var Hello4 = require("./hello4");
var hello4 = new Hello4();
hello4.sayHello();
hello4.message = "Changed !!!!";
hello4.sayHello();

var hello43 = new Hello4();
hello43.sayHello();

console.log(" - - - ");

var hello5 = require("./hello5");
hello5.sayHello();
