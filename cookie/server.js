const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
  if(req.url == '/'){
    console.log('request come: ' + req.url);
    // const html = fs.readFileSync('./testCrossOrigin.html')
    const html = fs.readFileSync('./test.html')
    const host = req.headers.host;
    console.log(host);
    if(host.indexOf('test.com') != -1){
      res.writeHead(200,{
        ContentType:'text/html',
        'Set-Cookie':['name=nico','bac=3456;HttpOnly,domain=test.com']
      })
    }
    res.end(html)
  }
}).listen(9998)
console.log("server is listen on 9998")
