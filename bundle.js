"use strict";

function somar(valorA) {
  var valorB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  //Esse valorB=10 é caso o valor B não seja passado, ele vai entrar como 10
  console.log(valorA + valorB);
}

somar(10, 11);

var soma = function soma(valorA) {
  var valorB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return valorA + valorB;
};

console.log(soma(5));
