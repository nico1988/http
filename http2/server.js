const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
  const html = fs.readFileSync('test.html','utf8')
  const img = fs.readFileSync('test.jpg')
  if(req.url == '/'){
    res.writeHead(200,{
      'Content-Type': 'text/html',
      'Connection': 'close',
      // Link http2 推送 test.jpg  指定类型  rel=preload 需要进行服务端推送
      'Link':'</test.jpg>; as=image; rel=preload'
    })
    res.end(html)
  }else{
    res.writeHead(200,{
      'Content-Type':'image/jpg',
      'Connection': 'close'
    })
    res.end(img)
  }
}).listen(9999)
console.log("server is listen on 9999")
