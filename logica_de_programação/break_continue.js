const numeros = [1,2,3,4,5,6,7,8,9]

for(let i of numeros){
       //if( i %2 === 0){
       // console.log("só impar")
       //continue
       // }

       console.log(i)
       
       if(i === 7){
        console.log("7 encontrado, Fim do processo... ")
        break
       }
       i++
}