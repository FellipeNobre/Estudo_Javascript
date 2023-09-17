// Criando classes

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    fala(){
        console.log(`${this.nome} está falando`)
    }

    comer(){
        console.log(`${this.nome} foi comer`)
    }

    dormir(){
        console.log(`${this.nome} está dormindo`)
    }
}


function Pessoa2(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}


const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa2('Maria', 'Ana')
console.log(p2.falar())
console.log(p1.comer())