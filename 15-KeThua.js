function Person(name, password){
    this.name = name;
    this.password = password;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getPassword = function(){
    return this.password;
}

Person.prototype.getLevel = function() {
    return this.level;
}

Person.prototype.level = "admin";

function User(name) {
    this.name = name;
}

User.prototype = new Person();

var person = new Person("Ti", "789");
var user = new User("Teo", "123");

//Chỉ kế thừa prototype, ko kế thừa giá trị của đối tượng person được khởi tạo ở trên
console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPassword());
console.log(person.getName());

Date.prototype.vnFormat = function() {
    var yyy = this.getFullYear();
    var mmm = this.getMonth();
    var ddd = this.getDate();
    return ddd + "/" + mmm + "/" + mmm;
}

var now = new Date();
var xms = new Date(2021, 01, 01);
console.log(now.vnFormat());
console.log(xms.vnFormat());
