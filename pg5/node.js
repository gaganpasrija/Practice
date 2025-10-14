const http = require('http');
const fs = require('fs');

const port = 3950;

function serveHtml(res, filename) {
    fs.readFile(filename, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        serveHtml(res, 'home.html');
    } else if (req.url === '/course') {
        serveHtml(res, 'course.html');
    } else if (req.url === '/contact') {
        serveHtml(res, 'contact.html'); 
    } else if (req.url === '/admission') {
        serveHtml(res, 'admission.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
