// Escreva uma função que receba 2 números e retorne o maior deles

function números(num1, num2){
    if(num1 > num2){
        console.log(`o maior é ${num1}`)
        return  num1
    } else{
        console.log(`o maior é ${num2}`)
        return  num2
    }
}

números(22,2);