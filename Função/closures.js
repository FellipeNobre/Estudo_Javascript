function retornaFunçao(nome){
    return function(){
        return nome
    }
}

const funcao = retornaFunçao('Fellipe')
const funcao2 = retornaFunçao('Adriana')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), ' ' ,funcao2())