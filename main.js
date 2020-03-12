// Operações com array em ES6+
const array = [1,3,4,5,8,9];

//Percorre todos os itens do vetor e executa determinada ação para ele como retorno
const novoArray=array.map(function(item,index){
    return item+index;
});
console.log(novoArray);
//Reduce: consumir todo o vetor e transformar em uma única informação (geralmente número);
const soma = array.reduce(function(total,proximoValor){
    return total+proximoValor;
});

console.log(soma);
/* 
    Execução:
    total: 0 próximo: 1
    total: 1 próximo: 3
    total: 4 próximo: 4
*/

//Filter: filtrar somente os itens que queremos
const filterPares = array.filter(function(item){
    /* if(item%2==0){
        return true;
    }else{
        return false;
    }
    */
    return item % 2 ===0;
});

const novosUsuarios=array.filter(function(usuario){
    return usuario.idade>=15;
})

console.log(filterPares);


//Find

const find = array.find(function(item){
    return item ===4;
});

if(find){
    console.log(find);
}

//forEach
novosUsuarios.forEach(function(item,index){
    console.log(item);
});

