var fs=require("fs");
var data=fs.readFileSync(__dirname+"/sample.txt");
console.log(data.toString());