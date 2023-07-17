// Moóulos - são conjuntos de códigos, que ocnseguimos ou não reutilizar

// 3 tipos de módulos
// -> TODOS OS ARQUIVOS JAVASCRIPT SÃO MÓDULOS;
// -> Nativos - só precisamos importar e utilizar.
// -> npm (Node Package Manager) - onde podemos publicar os módulos que criamos ou utilizar existentes

// importar módulos - temos que passar o caminho relativo e precisamos passar esta importação para dentro de uma constante
// const modulo = require('./printName');

// importar utilizando desestruturização
// const { printName, lastName } = require('./printName');

// printName(`Nathan ${lastName}`);

// módulos nativos - só precisamos passar o nome do módulo
const os = require('os');

console.log(os.type());
