const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.uri)
    res.end('Hello Node.js')
})
server.listener(3000)