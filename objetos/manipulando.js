// new Object -> Object.prototypes

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveB)

/////////////////////////////////

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(desconto){
    this.preco = this.preco - (this.preco *(desconto) /100)
}

Produto.prototype.aumenta = function(aumento){
    this.preco = this.preco + (this.preco *(aumento) /100)
}

const p1 = new Produto('Camiseta', 50)

// Literal 
const p2 = {
    nome: 'Caneca',
    preco: 15
}


Object.setPrototypeOf(p2,Produto.prototype)
p2.aumenta(100)
console.log(p2)

// p1.desconto(100)
p1.aumenta(100)
console.log(p1)