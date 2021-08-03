var person = {
    firstName : "Hang",
    lastName : "Dao",
    sayHello : function(){
        console.log("hello, " + this.firstName + " " + this.lastName);
    }
}

person.sayHello();
console.log(person["firstName"]);

var keyName = "lastName";
console.log(person[keyName]);