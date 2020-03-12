const usuario = {
    nome: 'Jordan',
    idade: 24,
    endereco: {
        cidade: 'Ituiutaba',
        estado: 'MG'
    }
};

console.log(usuario);
/*
let nome = usuario.nome;
let idade = usuario.idade;
let cidade = usuario.cidade;

console.log(nome, idade, cidade);
*/

const{nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade);