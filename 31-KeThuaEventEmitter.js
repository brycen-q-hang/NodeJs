var EventEmitter = require("events");
var util = require("util");

function Dialog() {
    this.message = "Hello World !";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function(data, pr1) {
    console.log(this.message + ": " + data);
    this.emit("hello", data, pr1);
}

var dialog = new Dialog();

dialog.on("hello", function (data, pr1) {
    console.log("Co 1 loi chao moi !", data);
    console.log("Co 1 loi chao moi !", pr1);
})

dialog.sayHello("Mai Hoa", "Phuong Nguyen");