var buffer = new Buffer("Xin chào", "utf8");

console.log(buffer);
console.log(buffer.toString()); //utf8
console.log(buffer.toString("ascii")); //ascii
console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write("hoa");
console.log(buffer.toString());