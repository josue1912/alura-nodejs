module.exports = function(app) {
  app.get('/produtos', function(req, res) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(erro, resultado) {
      res.format({
        html : function(){
          res.render('produtos/lista', {lista: resultado});
        },
        json : function(){
          res.json(resultado);
        }
      }); 
      
      connection.end();
    });
  });

  app.get("/produtos/form", function(req, res){
    res.render("produtos/form", {errosValidacao:{}, produto:{}});
  });

  app.post("/produtos/salva", function(req, res){
    var produto = req.body;
    console.log(produto);

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('preco', 'Valor invalido').isFloat();
    
    var erros = req.validationErrors();
    if (erros){
      res.format({
        html : function(){
          res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto});
        },
        json : function(){
          res.status(400).json(erros);
        }
      }); 
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.salva(produto, function(erro, resultado){
      res.redirect("/produtos");
    });
    
    connection.end();
  });

};
