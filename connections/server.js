const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
    console.log('request come: ' + req.url);
    // const html = fs.readFileSync('./testCrossOrigin.html')
    const html = fs.readFileSync('./test.html')
    const img = fs.readFileSync('./test.jpg')
    if(req.url === '/'){
      res.writeHead(200,{
        ContentType:'text/html',
        'Set-Cookie':['name=nico','bac=3456;HttpOnly,domain=test.com']
      })
      res.end(html)
    }else{
      res.writeHead(200,{
        ContentType:'image/jpg',
      })
      res.end(img)
    }
}).listen(9998)
console.log("server is listen on 9998")
