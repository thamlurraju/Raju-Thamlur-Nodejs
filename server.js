var http=require("http");
var server=http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/plain"});
	response.end("Hello...");
});
server.listen(1234,function(){
	console.log("server is running at port 1234");
});

