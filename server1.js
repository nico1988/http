const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
  if(req.url == '/'){
    console.log('request come: ' + req.url);
    // const html = fs.readFileSync('./testCrossOrigin.html')
    const html = fs.readFileSync('./testCacheControl.html')

    res.writeHead(200,{
      ContentType:'text/html',
    })
    res.end(html)
  }
  if(req.url == '/script.js'){
    const etag = req.headers['if-none-match'];
    console.log(req.headers);
    if(etag == 777) {
      res.writeHead(304,{
        ContentType:'text/javascript',
        'Cache-Control': 'max-age=2000000,no-store',
        'Last-Modified': '1243',
        'Etag': '777'
      })
      res.end("")
    }else{
      res.writeHead(200,{
        ContentType:'text/javascript',
        'Cache-Control': 'max-age=2000000,no-store',
        'Last-Modified': '1243',
        'Etag': '777'
      })
      res.end("console.log('script loaded')")
    }
  }
}).listen(9998)
console.log("server is listen on 9998")
