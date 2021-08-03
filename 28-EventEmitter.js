var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function(){
    console.log("Mot mon nao do bi diem kem !!!");
})
emitter.on("bad", function(){
    console.log("Da co diem kem, can gui thong bao den phu huynh !!!");
})

//bang diem
var scores = [10, 4];

for(var s of scores) {
    if(s < 5) {
        console.log("Diem thap !!! ", s);
        emitter.emit("bad");
    }
    //insert db
}