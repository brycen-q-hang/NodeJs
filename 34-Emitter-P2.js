var util = require("util");

function Person() {
    this.firstName = "Hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.firstName + " " + this.lastName + " " + this.id);
}

function Student() {
    Person.call(this); //importance: Su dung thuoc tinh cua Person
    this.id = "1234";
}

util.inherits(Student, Person);

var sv = new Student()
sv.sayHello();

