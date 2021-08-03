function Person() {
    this.message = "Hello NodeJS !!!";
    this.sayHello = function(){
        console.log(this.message);
    }
}

module.exports = new Person();