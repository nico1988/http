const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    },seconds*1000)
  })
}

http.createServer(function(req,res){
  console.log('request coming : ' + req.headers.host);
  const html = fs.readFileSync('./test.html','utf-8')
  if(req.url == '/'){
    res.writeHead(200,{
      'Content-Type': 'text/html',
    })
    res.end(html)
  }
  if (req.url === '/data'){
    res.writeHead(200,{
      'Cache-Control': 'max-age=20',
      'vary': 'X-test-cache'
    })
    wait(2).then(() => res.end('success'))
  }
}).listen(9999)
console.log("server is listen on 9999")
