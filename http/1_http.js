const http = require('http')

//创建一个简单的服务器
const server = http.createServer((req, res) => {
    res.end('hello world')
})

server.listen(8888, () => {
    console.log('服务器启动成功');
})