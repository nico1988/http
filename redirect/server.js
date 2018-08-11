const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
  if(req.url == '/'){
    res.writeHead(302,{
      Location: '/new'
    })
    res.end('')
  }
  if(req.url == '/new') {
    res.writeHead('200',{
      'ContentType': 'text/html'
    })
    res.end('<div>this is redirect html</div>')
  }
}).listen(9998)
console.log("server is listen on 9998")
