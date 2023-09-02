const pessoa = {
    nome: "Luiz",
    sobrenome: "Nobre",
    idade: "21",
    endereço:{
        rua: "Av Carlos",
        numero: "1144"
    }
}

// Attribuição via desestruturação
const { nome,sobrenome,idade,} = pessoa
console.log(nome,sobrenome,idade )

const {endereço: {rua,numero}} = pessoa
console.log(rua,numero)