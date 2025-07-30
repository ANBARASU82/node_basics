const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    path='./views/';
    res.setHeader('contenet-type','text/html');
    switch(req.url){
        case '/index':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.statusCode = 500;
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
        
    })
});
server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000');
});