var Emitter = require("events");
var eventConfig = require("./config").events;

var emitter = new Emitter();

emitter.on(eventConfig.BAD_SCORE, function(){
    console.log("Mot mon nao do bi diem kem !!!");
})

emitter.on(eventConfig.BAD_SCORE, function(){
    console.log("Da co diem kem, can gui thong bao den phu huynh !!!");
})

emitter.on(eventConfig.USER_CONNECTED, function(){
    console.log("Chuc mung ban da vuot qua ky thi !!!");
})

//bang diem
var scores = [10, 4];

for(var s of scores) {
    if(s < 5) {
        console.log("Diem thap !!! ", s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
    else
    {
        console.log("Vuot qua !!! ", s);
        emitter.emit(eventConfig.USER_CONNECTED)
    }
    //insert db
}