"use strict";

//Template Literals
var fullName = 'Uchiha Sasuke';
var age = 11; //"Meu nome é uchiha sasuke, tenho 11 anos."

console.log("Meu nome é " + fullName + ". E tenho " + age + "anos");
console.log("Meu nome \xE9 ".concat(fullName, ". E tenho ").concat(age, " anos"));
var mensagem = "Meu nome \xE9 ".concat(fullName, ". E tenho ").concat(age, " anos");
console.log(mensagem);
