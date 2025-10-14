const http = require('http');

const server =http.createServer((req,res)=>
{
res.writeHead(200,{'content-type':'text/html'});

res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
   
    <title>my node server</title>
</head>
<body>
    <h1>hello this is a node js server html</h1>
    <p>this is response with html content</p>
</body>
</html>
    `);

});
 server.listen(4000,()=>{
    console.log('server is running at http://localhost:4000');
 });