function changeValue(b) {
    b = 2;
}

var a = 1;
changeValue(a);
console.log(a);

/////////////////////////////////
function changeByRef(obj) {
    // obj.prop1 = function() {
    // };
    obj.prop1 = "HD";
    obj.prop2 = "XYZ";    
    obj.d = 100;
    obj.newProp2 = {};
}

var c = {};
// c.prop1 = 0;
// c.prop2 = "abc";
changeByRef(c);
console.log(c.prop1);
console.log(c.prop2);
console.log(c.d);