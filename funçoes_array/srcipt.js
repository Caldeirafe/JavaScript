//Exercicio 1
const numbers = [4, 16, 9, 25, 81]

const raiz = numbers.map(function(elemento){
    return Math.sqrt(elemento)
})

console.log(raiz)

//Exercicio 2

const produtos = [ 

    { nome: 'Camiseta', preco: 29.99 }, 

    { nome: 'Calça', preco: 49.99 }, 

    { nome: 'Tênis', preco: 89.99 } 

]; 

const grande = produtos.map (elem => elem.nome.toUpperCase())

console.log(grande)

//Exercicio 3

const nume = [10, 20, 3, 40, 60, 50, 25, 51, 41, 49, 9, 11 ]
const maior = nume.filter (elem => elem >= 10 && elem <= 50)

console.log (maior)

//Exercicio 4 

const pessoas = [ 

    { nome: 'Ana', idade: 17 }, 

    { nome: 'João', idade: 20 }, 

    { nome: 'Maria', idade: 19 } 

]; 

const p = pessoas.filter(elem => elem.idade >= 18 && elem.idade <=65)

console.log(p)

//Exercicio 5

const gi = [0, 2, 4, 6, 8, 10]

const ge = gi.reduce((preval, elem) => preval + elem, 0)
console.log (ge)


//Exercicio 6

const transacoes = [ 

    { tipo: 'deposito', valor: 100 }, 

    { tipo: 'retirada', valor: 50 }, 

    { tipo: 'deposito', valor: 200 } 

]; 

const saque = transacoes.reduce((preval, elem) =>{
    if (elem.tipo ==='deposito'){
        return preval + elem.valor;
    }else if (elem.tipo ==='retirada'){
        return preval - elem.valor;
    }
}, 0)

console.log(saque)

