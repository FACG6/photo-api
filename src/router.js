const handler= require('./handler');
const router =(request, response)=>{
    if(request.url == '/'){
        handler.homePage(request ,response);
    }else{
        handler.pageNotFound(request ,response);
    }
}
module.exports = router;