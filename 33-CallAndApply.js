var obj = {
    name: "Mai Hoa",
    sayHello: function (param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Params: ", param1, param2);
    }
}

obj.sayHello("Xin chao", "2016");
obj.sayHello.call({name: "Yen Phuong"}, "Xin chao", "2017");
obj.sayHello.apply({name: "Yen Hang"}, ["Xin chao", "2018"]);