// Map
// Dobre os números

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const dobro = numeros.map(valor => valor * 2)
//console.log(dobro)

// Para cada elemento 
// Retorne apenas uma String com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoa =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomes = pessoa.map(obj => obj.nome)
console.log(nomes)

const remove = pessoa.map(obj => ({ idade: obj.idade}))
console.log(remove)

const comIds = pessoa.map(function(obj,indice){
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})

console.log(comIds)