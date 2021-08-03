var buffer = new ArrayBuffer(12);
var view = new Int32Array(buffer); //Mỗi phần tử Int chiếm 4 byte, nên 8 byte chỉ chứa 2 phần tử Int

view[0] = 5;
view[1] = 10;
// view[2] = 15;
// view[3] = 20;
// view[4] = 25;
// view[5] = 30;
// view[6] = 35;
// view[7] = 40;
console.log(view);