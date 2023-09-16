 const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
 }
 const chave = 'nome'
 console.log(pessoa[chave])


 const pessoa1 = new Object()
 pessoa1.nome = 'Luiz'
 pessoa1.sobrenome = 'Otávio'
 pessoa1.idade = 19
 pessoa1. falarNome = function(){
    return (`${this.nome} está falando seu nome.`)
 }
 pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
 }
 
 console.log(pessoa1.getDataNascimento())
 console.log(pessoa1.falarNome())


 // Factory functions

 function Pessoa(nome,sobrenome){

    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
 }

 const p = new Pessoa('Luiz', 'Mirando')
 p.nome = 'Outra coisa' // Não funciona pq tem freeze
 console.log(p)



