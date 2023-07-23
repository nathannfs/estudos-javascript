# -Node JS

Lançado em 2009

### O que é - Plataforma para rodar JavaScript no servidor.

### V8 - interpretador de códigos.

### Call Stack - coisas que está executando e esperando executar, a primeira função que entra na call stack é sempre a última a sair

### Single Thread - apenas uma call stack, executa apenas uma coisa por vez

O node não consegue executar mais de uma coisa ao mesmo tempo

Porém ele também é non-blocking I/O e consegue executar mais de uma coisa ao mesmo tempo, pois por baixo dos panos ele roda uma biblioteca chamada "Libuv".

#### Libuv - é uma biblioteca C multiplataforma que providencia entrada/saída assíncrona baseado em um laço de eventos. Para implementar chamadas bloqueantes de forma assíncrona, a libuv utiliza sockets assíncronos e uma thread pool

## Thread Pool - onde é jogado as funções bloqueantes para evitar que bloqueie o processo da Call Stack, deixando com que as coisas na Call Stack continuem processando

Quando acaba o processo da função que está na Thread Pool, ela é jogada em uma Callback Queue

## Event Loop - fica verificando sempre na Callback Queue se tem alguma função pronta para executar

O node não deixa uma função bloqueante bloquear o processo

"Função bloqueante - leva um certo tempo para ser executada com isso bloqueando o processamento enquanto ela não for executada"

É desta maneira que o node consegue executar coisas assíncrona

## API Rest

### API - Application Programming Interface, executam do lado do servidor

Permite conectar várias aplicações de diferentes tipos em um único banco de dados

### Protocolo HTTP - Hypertext Tranfer Protocol

Ele é uma troca de mensagens entre duas pontes
Fazemos uma requisição ao servidor, e o servidor da uma resposta

### Request HTTP

#### URL/endpoint - identificação de recursos - tudo que vem depois do domínio, então "/" alguma coisa é o endpoint

#### Query Params - parâmetros na URL - são informações adicionais

#### Método - identificação de ação

#### GET - consulta de dados;

#### POST - criação de registros;

#### PUT - alteração de registros;

#### DELETE - deleção de registros.

#### Headers - informações adicionais entre cliente e servidor

Nome e valor separados por dois pontos:
"Case insensitive - tanto faz se estão em maiúsculo ou minúsculo"

#### Content-Type:application/json - identificação do tipo de informação

authorization: Bearer usertoken

#### Custom Headers (sempre começam com X):

X-Org-ID: 1123

#### Body - mandar o corpo da mensagem

Apenas para requisições POST e PUT
Normalmente enviado em JSON (JavaScript Object Notation)

### Response HTTP

#### Headers - informações adicionais entre cliente e servidor

#### Content Type - tipo do conteúdo da resposta

#### Status Code - indica o que aconteceu com a request

#### Body - dados que foram requisitados

### Status Code - categorizados pelo primeiro dígito

#### 100-199 - respostas de informação

#### 200-299 - respostas de sucesso

#### 300-399 - redirecionamentos

#### 400-499 - erros do cliente

#### 500-599 - erros do servidor

### Principais códigos

#### 200 - OK

#### 201 - Created

#### 204 - No Content

#### 400 - Bad Request

#### 401/403 - Unauthorized

#### 404 - Not Found

#### 405 - Method Not Allowed

#### 409 - Conflict

#### 500 - Internal Server Error

### REST - Padrão para construção de API's que utiliza o protocolo HTTP

#### Nomes de Endpoints - sempre no plural

#### GET /products

#### GET /products/10 - com parâmetros

mesma coisa com os outros métodos

Representaçao de Estados - JSON
