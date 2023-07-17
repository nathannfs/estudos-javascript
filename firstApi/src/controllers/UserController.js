// Responsável por armazenar toda a regra de negócio

// CRUD - Create - Read - Update - Delete

let users = require('../mocks/users');

// função para listar usuários
module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    // criando função para ordenar os usuários
    const sortedUsers = users.sort((a, b) => {
      // condição para ordenar em ordem decrescente ou crescente
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    // código refatorado do comentário abaixo
    response.send(200, sortedUsers);

    // dizemos o tipo da resposta que teremos
    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // para enviar a resposta - sempre precisamos enviar uma string - então usamos isso que transforma json em string
    // response.end(JSON.stringify(sortedUsers));
  },

  // função parar mostrar usuário com o id passado na url
  getUserById(request, response) {
    const { id } = request.params;

    // irá buscar o usuário que tem o mesmo id que foi passado na url
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      // código refatorado do comentário abaixo
      return response.send(400, { error: 'User not found!' });

      // response.writeHead(400, { 'Content-Type': 'application/json' });
      // retorna um erro caso não encontra o id que foi buscado na url
      // response.end(JSON.stringify({ error: 'User not found!' }));
    }

    // código refatorado do comentário abaixo
    response.send(200, user);

    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // retorna os dados do id buscado
    // response.end(JSON.stringify(user));
  },

  // função para criar usuários
  createUser(request, response) {
    // acessando informações
    const { body } = request;

    // pegar o id do último usuário cadastrado
    const lastUserId = users[users.length - 1].id;

    // pegar os dados recebidos e criar novo usuário
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    };

    // jogar o array na memória
    users.push(newUser);

    response.send(200, newUser);
  },

  updateUser(request, response) {
    // pegando o id do usuário
    let { id } = request.params;

    // pegando o nome do usuário
    const { name } = request.body;

    id = Number(id);

    // verificar se o usuário com o id passado existe
    const userExists = users.find((user) => user.id === id);

    if (!userExists) {
      return response.send(400, { error: 'User not found!' });
    }

    users = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name,
        };
      }

      return user;
    });

    response.send(200, { id, name });
  },

  deleteUser(request, response) {
    // pegando o id do usuário
    let { id } = request.params;
    id = Number(id);

    users = users.filter((user) => user.id !== id);
    response.send(200, { deleted: true });
  },
};
