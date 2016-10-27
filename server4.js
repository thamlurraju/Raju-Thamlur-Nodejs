var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
var data;

//i am driving
emitter.on("Diving_Start",function(data){
data=console.log("I am in Driving")
})
emitter.emit("Diving_Start",data)