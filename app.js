var http = require('http');
var module = require('./module');
var module2 = require('./module2');

http.createServer(function onRequest(request,response){

    response.writeHead(200,{'Content-type':'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
    
}).listen(9000);