var fs=require("fs");
console.log("start /n");
fs.readFile(__dirname+"/sample.txt",function(err,data){
	console.log(data.toString());
});
console.log("/n Done /n");