var buffer=new Buffer("Hello");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[5]);
buffer.write("po");
console.log(buffer.toString())
buffer.write("poland")