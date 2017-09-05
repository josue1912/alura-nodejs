var mysql = require("mysql");


function createDBConnection() {
  return mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "senha",
    database : "casadocodigo_node"
  
  });
};

module.exports = function(){
  return createDBConnection;
};
