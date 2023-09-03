//For in  -> lê os indices ou chaves do objeto

const frutas = ["banana", "maçã", "uva"];

for(let i =0 ; i<frutas.length; i++){
    //console.log(frutas[i])
}

for(let indice in frutas){
    //console.log(frutas[indice])
}

const pessoa = {
    nome: "Luiz",
    idade: 21,
    Mora: "Brasil"
}

for(let chave in pessoa){
    console.log(pessoa[chave])
}