var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/plain"});
	response.end("Hello...");
}).listen(1234);

console.log("server is running at port 1234");