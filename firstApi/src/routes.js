// Rotas da API

const UserController = require('./controllers/UserController');

// criando rotas
module.exports = [
  {
    // rota para mostrar os usuários
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    // rota para mostrar usuários que for passado na url
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    // rota para criar usuários
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
  {
    // rota para  editar usuários
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser,
  },
  {
    // rota para deletar  usuários
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser,
  },
];
