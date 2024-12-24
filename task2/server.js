const http = require("http")

const server = http.createServer((req, res)=>{
    /*res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>HELLO NODE!!!</h1>")
    res.end()*/
    res.statusCode(200).send("<h1>HELLO NODE!!!</h1>")

})
server.listen(3000, ()=>{console.log("server is running ...")})