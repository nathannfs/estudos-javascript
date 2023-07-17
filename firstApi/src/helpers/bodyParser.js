module.exports = function bodyParser(request, callback) {
  let body = '';

  // criando um event listener para sempre que chegar um elemento data no body, sempre ir concatenando ele
  request.on('data', (chunk) => {
    // concatenando o body com o dado que chegar guardado na variável 'chunk'
    body += chunk;
  });

  // ação para quando finalizar essa concatenação
  request.on('end', () => {
    // convertendo para objeto javascript
    body = JSON.parse(body);

    // injeta dentro do request
    request.body = body;

    // chama a função de callback que passamos quando executamos o bodyParser
    callback();
  });
};
