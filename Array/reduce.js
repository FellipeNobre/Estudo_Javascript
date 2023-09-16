// Some todos os números

const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const list= lista.reduce(function(acumulador, valor){
   return acumulador += valor
})
console.log(list)


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63}
]

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)
