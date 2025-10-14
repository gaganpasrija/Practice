const http=require('http');
const fs=require('fs');

const userData={
    heading:"Program 3",
    name:"aman",
    age:20,
    email:"unknownneo9@gmail.com",
    isAdmin:false,
    hobbies:["reading","traveling","coding"]
};

function htmlPage(content)
{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
            background-image: url("R.jpg");
        }
    </style>
</head>
<body>
    <h1 style="text-align:center;">Program NO:4</h1>
    ${content}
</body>
</html>`;
}
const server=http.createServer((req,res)=>
{
    if(req.method==='GET' && req.url==='/data')
    {
        const jsonString=JSON.stringify(userData,null,2);
        fs.writeFile('data.json',jsonString,(err)=>
        {
            if(err)
            {
                res.writeHead(500,{'Content-Type':'text/html'});
                res.end(htmlPage(`<pre>Error failed to write file...</pre>`));
               
            }
            else
            {
                res.writeHead(500,{'Content-Type':'text/html'});
                res.end(htmlPage(`<pre>${jsonString}</pre>`));         
               }
        });
    }
    else
        {
              res.writeHead(404,{'Content-Type':'text/html'});
                res.end(htmlPage(`<pre>Error 404: Page not Found...</pre>`));
        }
});

const port=4000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/data`);
});