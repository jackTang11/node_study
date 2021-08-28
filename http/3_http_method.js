const http = require('http')
const url = require('url')
const qs = require('querystring')


//创建一个简单的服务器  
const server = http.createServer((req, res) => {
    // console.log(req.headers);
    const { pathname } = url.parse(req.url)
    if (pathname === '/login') {
        req.setEncoding('utf-8')
        req.on('data', (data) => {
            const { username, password } = JSON.parse(data)
            console.log(username, password);
        })
    }
    res.end('hello world')
})

server.listen(8888, () => {
    console.log('服务器启动成功');
})