var Dialog = require("./dialog");
var dialog = new Dialog();

dialog.on("hello" , function(data) {
    console.log("Chao " + data);
})

dialog.sayHello("Hoa Mai");