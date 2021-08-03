function f1(){
    console.log("f1 print");
}

function PassFunctionAsParams(fn){
    fn();
    var f2 = function(){
        console.log("f2 print");
    }

    return f2;
}

PassFunctionAsParams(f1)();