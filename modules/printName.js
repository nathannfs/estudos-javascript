exports.printName = (name) => {
  console.log(name);
};

// podemos exportar direto na criação
exports.lastName = 'Santos';

// precisamos dizer o que pode ficar disponível para outras pessoas usarem
module.exports = { printName, lastName };
