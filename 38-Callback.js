var firstFuction = function() {
    console.log("I'm first !");
}

var secondFunction = function() {
    setTimeout(firstFuction, 5000);
    console.log("I'm second !");
}

secondFunction();