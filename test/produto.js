var express = require("../config/express")();
var request = require("supertest")(express);

describe('#ProdutosController', function(){
    it('#teste json', function(done){
        request.get("/produtos")
            .set('accept', 'application/json')
            .expect('content-type',/json/)
            .expect(200, done);
    });
});
