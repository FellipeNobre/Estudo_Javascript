// return - retorna um valor, termina a função

function soma(a,b){
    return a + b
}

function imprimir(){
    console.log(soma(1,3))
}
imprimir()


///////////////////////////////

function pessoa(nome, sobrenome){
    return {nome,sobrenome}
}
const p1 = pessoa('fellipe', 'nobre')
console.log(p1)

//////////////////////////////////


function multiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}
 
const duplica = multiplicador(2)
const triplica = multiplicador(3)
const quadriplica= multiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))