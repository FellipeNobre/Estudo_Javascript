// Construtora -> molde (classe)

function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => "ORIGINAL:" + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.')
const data = new Date()

console.dir(pessoa1)
console.dir(data)