// Função construtora -> objetos
// Construtora -> Sempre com letra maiuscula

function Pessoa (nome, sobrenome){
    // Privadas 
    const ID = 123
    const metodoInterno = function(){

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': Um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('André', 'Luiz')
console.log(p1.sobrenome)
p1.metodo()