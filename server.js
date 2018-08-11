const http = require('http')
http.createServer(function(req,res){
  res.writeHead(200,{
    'Access-Control-Allow-Origin': 'http://127.0.0.1:9998',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': ',PUT,Delete,POST',
    'Access-Control-Max-Age': '1000'
  })
  console.log('request come: ' + req.url);
  res.end('123')
}).listen(9999)
console.log("server is listen on 9999")
