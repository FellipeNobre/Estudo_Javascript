// Produto -> Aumento de preço e desconto
// Camiseta = tamanho
// caneca = material
// lapis = cor

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto= function(quantia){
    this.preco -= quantia
}

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco* (percentual / 100))

}

function Caneca(nome, preco,material,estoque){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, "estoque",{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){ 
            if(typeof valor !== 'Number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca


const produto = new Produto('Gen', 111)
console.log(produto)

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(100)
console.log(camiseta)

const caneca = new Caneca('Caneca', 13 , 'plástico', 5)
console.log(caneca)
console.log(caneca.estoque)