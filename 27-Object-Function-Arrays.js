var obj = {
    sayHello: "Hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello";
console.log(obj[prop]);

//function and arr
var arr = [];

arr.push(function() {
    console.log("Hello NodeJS 1");
})
arr.push(function() {
    console.log("Hello NodeJS 2");
})
arr.push(function() {
    console.log("Hello NodeJS 3");
})

arr[0]();
arr[1]();
arr[2]();

console.log(" - - - ");
//for
arr.forEach(function (item) {
    item();
})