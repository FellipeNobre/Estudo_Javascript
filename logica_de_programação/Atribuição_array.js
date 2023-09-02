const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [Num1, Num2 , ...rest] = numeros
console.log(Num1, Num2)
console.log(rest)

const arrays = [
// Lista de arrays    
//      0           1           2
    [1, 2, 3] , [4, 5, 6] , [7, 8, 9]
]
const [lista1, lista2, lista3] = arrays

console.log(lista1[2])
console.log(arrays[2][0])