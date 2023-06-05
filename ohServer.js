const http = require('http');
const fs=require("fs");
const server= http.createServer((req,res)=>{
    // set header
    res.setHeader("Content-type","text/html");
    //send html file
    let path="./views/";
    switch(req.url){
        case "/":
            path+="index.html";
            res.statusCode=200;
            break;
        case "/about":
            path+="about.html";
            res.statusCode=200;
            break;
        case "/aboutla":
            path+="about.html";
            res.statusCode=301;
            res.setHeader('Location',"/about");
            break;
        default:
            path+="404.html";
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    });
    
});

server.listen(3000,'192.168.1.40'),()=>{
    console.log("listening at port 3000");
}