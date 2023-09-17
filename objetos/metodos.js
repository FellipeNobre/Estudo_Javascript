/*
object.values
object.entries
object.assign(des, any)
object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
object.keys(Retorna as chaves)
object.freeze(congela o objeto)
object.defineProperties(define várias propriedades)
object.defineProperty(define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.0}
const outra = {...produto, material: 'Porcelana'}
console.log(outra)

////////////////////

const produto1 = {nome: 'Caneca', preco:1.2}
const outra1 = Object.assign({}, produto1, {material: 'Madeira'})
console.log(outra1)

/////////////////

const produto2 = {nome: 'Caneca', preco:1.5}
console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));
console.log(Object.values(produto)) // pega os valores
console.log(Object.entries(produto))
