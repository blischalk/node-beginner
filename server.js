var http = require("http");
var url = require("url");

/*
http.createServer(function(request, response) {
  response.writeHead(200, {"ContentType": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/

exports.start = function start(route, handle) {

  http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname);
    response.write(content);
    response.end();
  }).listen(8888);

  console.log("Server has started.");
}
