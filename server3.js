var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
var fs=require("fs");
var fileName="./sample.txt"

//Start reading the File

emitter.on("Start_reading",function(fileName){
	console.log("start the read file......")
	fs.readFile(fileName,function(err,data){
		if(err){
			emitter.emit("error",err)
		}
		else{
			console.log("done reading file....")
			emitter.emit("print_content",data.toString())
		}
	})

})

//Print the File Content

emitter.on("print_content",function(data){
console.log(data);
console.log("Done the Printing...")
emitter.emit("done")
})

// Error

emitter.on("error",function(err){
console.log("oops somthing went wrong!!!")
console.log(err)
})
//Done


emitter.on("done",function(){
console.log("done with Emitter")
})

emitter.emit("Start_reading",fileName)
