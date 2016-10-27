var fs=require("fs");
var readable=fs.createReadStream("./sample.txt",
	{encoding:"utf8",highWaterMark:4*1024});

var writable=fs.createWriteStream("./samplecopy.txt")

readable.on("data",function(msg){
	console.log(msg.length);
	writable.write(msg)
})

// msg==chunk