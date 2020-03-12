//Arros Functions
const array = [1,3,4,5,8,9];

const novoArray = array.map((item)=> item * 2);

/*
    1. Remove a keyword function
    2. Colocar a flecha -=> entre o parentese e a chave
    3. A funcção recebe parâmero?
        sim
            3.1 remove o parentese por volta do parâmetro
            3.2 a função retorna apenas uma informação ( 1 linha de retorno);
            3.3 colocar diretamente depois da flecha (sem chaves)
*/

const teste = () => {
    console.log('oi');
};//Não é recomendado fazer isso!!!!!!!!!!!!!!!!

const teste2 = () => [1,2,3,];

const teste3 = () => ({nome: 'João das neves', idade: 10});