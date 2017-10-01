Promise.resolve('Yep')
.then(function(data) {
   return Promise.reject('Oops')
}, function (error) {
  // nada de errado com a promise Yep
})  
.catch(function (error) {
  console.error(error)
  // o erro é tratado por esta primeira callback de falha
  return 'Tudo certo'
})
.then(function (message) {
  // o valor retornado pela callback de falha é transformado
  // em uma promessa resolvida
  console.log(message)
})