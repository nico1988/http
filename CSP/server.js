const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
  const html = fs.readFileSync('test.html','utf8')
  if(req.url == '/'){
    res.writeHead(200,{
      'Content-Type': 'text/html',
      // 'Content-Security-Policy': 'default-src http: https:',
      // 'Content-Security-Policy': 'script-src \'self\'; https://cdn.bootcss.com form-action \'self\'',
      // 'Content-Security-Policy-Report-Only': 'script-src \'self\'; form-action \'self\'; report-uri /report',
    })
    res.end(html)
  }else{
    res.writeHead(200,{
      'Content-Type': 'application/javascript',
    })
    res.end('console.log("loaded script")')
  }
}).listen(9998)
console.log("server is listen on 9998")
