const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function(req,res){
    console.log('request come: ' + req.url);
    // const html = fs.readFileSync('./testCrossOrigin.html')
    const html = fs.readFileSync('./test.html')
    res.writeHead(200,{
      ContentType:'text/html',
      'Content-Encoding': 'gzip',
      'Set-Cookie':['name=nico','bac=3456;HttpOnly,domain=test.com']
    })
    res.end(zlib.gzipSync(html))
}).listen(9998)
console.log("server is listen on 9998")
