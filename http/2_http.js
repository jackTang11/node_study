const http = require('http')
const url = require('url')
const qs = require('querystring')


//创建一个简单的服务器  
// http://127.0.0.1:8888/users?username=123&password=456
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    const { pathName, query } = url.parse(req.url)
    const { username, password } = qs.parse(query)
    console.log(username, password);
    // console.log(req.headers);
    res.end('hello world')
})

server.listen(8888, () => {
    console.log('服务器启动成功');
})