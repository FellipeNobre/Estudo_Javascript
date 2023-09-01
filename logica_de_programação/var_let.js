const verdadeira = true

// Let tem escopo de bloco { ...bloco }
// Var só tem escopo de função

let nome = "fellipe" // Criando
var nome2 = "luiz" // Criando

if(verdadeira){
    let nome = "otavio" // Criando
    var nome2 = "Rogerio" // redeclarando
    console.log(nome, nome2)
     
    if(verdadeira){
        let nome = "Maria"
        console.log("Ok " + nome)
    }
}

