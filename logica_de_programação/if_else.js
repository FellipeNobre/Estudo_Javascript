let hora = 11

if(hora >= 0 && hora <= 11){
    console.log("Bom dia")
} else if(hora >= 12 && hora <= 17){
    console.log("Boa Tarde")
}else if(hora >= 18 && hora <= 23){
    console.log("Boa noite")
}else{
    console.log("ERRO")
}

// apenas uma condição sera executada, mesmo tento varias verdadeiras