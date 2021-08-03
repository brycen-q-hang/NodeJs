'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //func
    sayHello() {
        console.log("hello, " + this.firstName + " " + this.lastName);
    }
}

class abc {
    say()
    {
        console.log("HD");
    }
} 

var hoa = new Person("Hoa", "Mai");
hoa.sayHello();

var phuong = new Person("Phuong", "Yen");
phuong.sayHello();

var a = new abc();
console.log(hoa.__proto__);
console.log(phuong.__proto__);
console.log(hoa.__proto__ === phuong.__proto__);
console.log(hoa.__proto__ === a);