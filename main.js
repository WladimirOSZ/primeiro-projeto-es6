function somar(valorA, valorB=10){//Esse valorB=10 é caso o valor B não seja passado, ele vai entrar como 10
    console.log(valorA+valorB);
}

somar (10,11);

const soma = (valorA, valorB = 10) => valorA+valorB;

console.log(soma(5));