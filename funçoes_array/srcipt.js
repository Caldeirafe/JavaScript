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

//Exercicio 7

const num = [0, -2, 4, 5, 6, -8, 7, -9, 10]

console.log(num.every(x => x < 0))

//Exercicio 8

const alunos = [ 
    { nome: 'Ana', nota: 7 }, 
    { nome: 'João', nota: 5 }, 
    { nome: 'Maria', nota: 8 } 
]; 

const nota = (alunos.every(x => x.nota >= 6))
console.log (nota)

//Exercicio 9

const n = [0, -1, 5, 6, 8, 9, -7]
const v = n.some(x => x < 0)

console.log(v)

// Exercicio 10 

const produto = [ 

    { nome: 'Camiseta', preco: 29.99 }, 
    { nome: 'Calça', preco: 49.99 }, 
    { nome: 'Tênis', preco: 120.00 } 
]; 
console.table(produto)
const m = produto.some(x => x.preco > 100)

console.log(m)

// Exercicio 11

const mune = [0, 1, 2, 3, 4, 5, 70, 46, 10, 12, 30]
const gg = mune.find(x => x > 10)

console.log(gg)

//Exercicio 12

const pessoa = [ 

    { nome: 'Ana', idade: 17 }, 
    { nome: 'João', idade: 20 }, 
    { nome: 'Maria', idade: 19 } 
]; 

const lind = pessoa.find(x=>x.idade > 18)

console.log(lind)

//Exercicio 13

const pingo = [0, 2, 6, 5, 8, 10, 9, 1, 25]

const ping = pingo.includes(25)

console.log(ping)

//Exercicio 14

const frutas = ['Banana', 'Laranja', 'Maçã', 'Manga']; 

const frut = frutas.includes('Manga')

console.log(frut)