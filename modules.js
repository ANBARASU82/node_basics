const xyz=require('./sub.js')
const os=require('os');
console.log(xyz.rcb);
console.log(os.platform(),os.homedir());

const fs = require('fs');


fs.appendFile('./docs/ab.text','\n Abdevilliers is the blood of RCB',(err)=>{
    if(err){
        console.log(err);
    }
})
fs.readFile('./docs/ab.text',{encoding:'utf8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

if (! fs.existsSync('./ass')){
    fs.mkdir('./ass',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file created");
    })
}
else{
    fs.rmdir('./ass',(err)=>{
        if(err){
            console.log(err);
        }
    })
}

const readstream = fs.createReadStream('./docs/ab.text',{encoding:'utf8'});
const writestream = fs.createWriteStream('./docs/ab1.text');
readstream.on('data',(chunk)=>{
    console.log(chunk);
    writestream.write("\n new book \n");
    writestream.write(chunk);
});

readstream.pipe(writestream);

const http = require('http');

const server =http.createServer((req,res)=>{
    console.log("requests made");
});

server.listen(3000,'localhost',()=>{
    console.log("listening to 3000");

})