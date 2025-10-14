const http = require('http');

const server =http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/plain'});

if(req.url==='/'){
    res.end('welcome to the home page!');

}else if(req.url==='/about'){
    res.end('this is about page');

}else if(res.url==='/contact'){
    res.end('contact us at  abc@gmail.com');

}else{
    // res.writeHead(404,{'content-type':'text/plain'});
    res.end('404 not found');

}
});

server.listen(5000,()=>{
    console.log('server is running at http://localhost:5000'
    );
});