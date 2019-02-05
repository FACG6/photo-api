const path = require('path');
const fs = require('fs');
const homePage = (request , response)=>{
const pathFile = path.join(__dirname ,'..', 'public', 'index.html');
fs.readFile(pathFile, (error, file)=>{
    if(error){
        response.writeHead(500, {"content-Type":"text/html"});
        response.end('<h1>server error</h1>');
    }else{
        response.writeHead(200, {"content-Type":"text/html"});
        response.end(file);
    }

})
}

const pageNotFound = (request , response)=>{
    const pathFile =path.join(__dirname,'..','puplic','notfound.html');
    fs.readFile(pathFile,(error,file)=>{
        if(error){
            response.writeHead(500,{"content-type":"text/html"});
            response.end("<h1>server error</h1>");
        }else{
            response.writeHead(404, {"content-Type":"text/html"});
            response.end(file); 
        }

    })
}
module.exports={homePage,pageNotFound};