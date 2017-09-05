var http = require("http");

var configuracoes = {
    port : 3000, 
    host : "localhost", 
    path: "/produtos",
    headers : {
        "Accept" : "application/json", 
    }

}

http.get(configuracoes, function(res){
    console.log("status: "+res.statusCode);
    res.on('data', function(body){
        console.log("body: "+ body);
    });
});
