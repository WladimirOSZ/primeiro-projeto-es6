const usuario = {
    nome: 'Jordan',
    idade: 24,
    endereco: {
        cidade: 'Ituiutaba',
        estado: 'MG'
    }
};

const { nome, ...resto}=usuario;

console.log(nome);
console.log(resto);

const array = [1,2,3,4];
const array2 = [5,6,7];

const [primeiro, segundo, ...restante] = array;
console.log(primeiro,segundo);
console.log(restante);

function soma(...parametros){
    console.log(parametros);
    return parametros.reduce((total,next) => total + next);
}

console.log(soma(1,3,6,9,1,11));

const novoArray = [...array, ...array2];
console.log(novoArray);

const usuario2 = { ...usuario, nome: 'Maria Carolina'};//Pega todo o conteúdo de usuario e sobrescreve o nome
console.log(usuario2);