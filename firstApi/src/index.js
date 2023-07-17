// importação do HTTP
const http = require('http');
const { URL } = require('url');

const bodyParser = require('./helpers/bodyParser');
const routes = require('./routes');

// recebe o servidor HTTP
const server = http.createServer((request, response) => {
  // Create Server - para criar um servidor e precisamos passar uma função dentro dela

  // dando parse na url para extrair as informações passadas nela
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(
    `Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`
  );

  let { pathname } = parsedUrl;
  let id = null;

  // procurar dentro do pathname a '/'
  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.length > 1) {
    // para conseguir localizar dentro do array de rotas
    pathname = `/${splitEndpoint[0]}/:id`;

    // salva o id que chega do endpoint
    id = splitEndpoint[1];
  }

  // procurar um elemento dentro do vetor de rotas
  const route = routes.find((routeObj) => {
    // verificar se existe um endpoint registrado com o pathname e método que ta chegando da request
    return routeObj.endpoint === pathname && routeObj.method === request.method;
  });

  // quando encontrar uma rota
  if (route) {
    // injetar no query params as informaçõ'es da url
    request.query = Object.fromEntries(parsedUrl.searchParams);

    // injeta o id passado na url
    request.params = { id };

    // função para não precisar ficar repetindo o código toda vez, só precisa passar o statusCode e body que vai ser enviado na resposta
    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });

      // retorna um erro caso não encontra o id que foi buscado na url
      response.end(JSON.stringify(body));
    };

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      // conseguir pegar o string do body e transfromar em JSON
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname} `);
  }
});

// para erguer o servidor
server.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
