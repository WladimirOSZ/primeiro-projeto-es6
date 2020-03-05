class List{
    constructor(){
        this.data=[];
    }
    add(value){
        this.data.push(value);
        console.log(this.data);
    }
    pop(){
        this.data.pop();
        this.print();
    }
    print(){
        console.log(this.data);
    }
}

class TodoList extends List{//Herança
    print(){
        console.log("Imprimindo todo list");
        super.print();
    }
}

class Matematica{
    static soma(valueA, valueB){
        return valueA+valueB;
    }
}

console.log(Matematica.soma(5,7));

const minhaLista = new TodoList();

document.getElementById('novoTodo').onclick=function(){
    minhaLista.add('FRIFASS D213');
}
document.getElementById('remove').onclick=function(){
    minhaLista.pop();
}