function Produto(nome,preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Mostra a chave       
        configurable: true,   //pode reconfigurar a chave

        //Getter pega o valor 
        get: function(){
            return estoquePrivado
        },

        //Setter modifica o valor
        set: function(valor){
            if(typeof valor !== 'Number'){
                console.log('precisa ser um número')
                return
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20 , 3)
console.log(p1)
console.log(p1.estoque)



function cria(nome){
    return{
        get nome(){
            return nome
        },

        set nome(valor){
            nome = valor
        }
    }
}
const item = cria('Bermuda')
console.log(item.nome)
