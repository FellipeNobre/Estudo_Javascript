//Escreva uma função que rebece um número e 
// retorne o seguinte
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// checar  se o número é realmente um número
// use a função com números de 0 a 100

function número (número){
        if( número % 3 ===0 ){
            return "Fizz"
        }else if(número % 5 ===0){
            return "Buzz"
        }else if(número % 3 ===0 && i % 5 ===0){
            return "FizzBuzz"
        }else{
            return número
        }
    }

for(let i = 0; i<=100; i++){
    console.log(i,número(i))
}
