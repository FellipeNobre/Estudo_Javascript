//For clássico - Geralmente ccom iteráveis (array ou Strings)
// For in - Retorna o  indíce ou chave (String,array ou objetos)
// For of - Retorna o valor em si (iteráveis, array o String)

let nome = "Fellipe Nobre"

for(let i = 0; i< nome.length; i++){
    //console.log(nome[i])
}
for(let i in nome){
   //console.log(nome[i])
}
for(let valor of nome){
    //console.log(valor)
}

////////////////////////////////////

const frutas = ["banana", "uva", "laranja"]

for(let valor of frutas){
    console.log(valor)
}