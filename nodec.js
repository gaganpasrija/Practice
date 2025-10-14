const http = require('http');
const fs = require('fs');

const port = 3900;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
         res.end('hello this is server');
    } else if (req.url === '/about') {
         res.end('hello this is about us page');
    } else if (req.url === '/contact') {
         res.end('hello this is contact page');
    } else if (req.url === '/career') {
         res.end('hello this is career page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
