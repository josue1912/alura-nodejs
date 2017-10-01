var http = require("http");

var configuracoes = {
    port : 3000, 
    host : "localhost", 
    path: "/produtos/salva",
    method: "post",
    headers : {
        "Accept" : "application/json", 
        "Content-type" : "application/json"
    }

}

var produto = {
    titulo : "",
    descricao : "node JS é muito bom" ,
    preco : 54
};

var client = http.request(configuracoes, function(res){
    console.log("status: "+res.statusCode);
    res.on('data', function(body){
        console.log("body: "+ body);
    });
});

client.end(JSON.stringify(produto));
