function Produto(nome,preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Mostra a chave
        value: estoque,     // valor
        writable: false,    // Controla se o valor pode ou não ser alterado
        configurable: false   //pode reconfigurar a chave
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   // Mostra a chave
            value: nome,     // valor
            writable: true,    // Controla se o valor pode ou não ser alterado
            configurable: true  //pode reconfigurar a chave
        },
        preco: {
            enumerable: true,   // Mostra a chave
            value: preco,     // valor
            writable: true,    // Controla se o valor pode ou não ser alterado
            configurable: true   //pode reconfigurar a chave
        }
    })
}

const p1 = new Produto('Camiseta', 20 , 3)
console.log(Object.keys(p1))