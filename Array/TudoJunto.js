 // Retorne a soma do dobro de todos os pares
 // -> Filtrar pares
 // -> Dobrar os valores
 // -> Reduzir (Somar tudo)

 const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 const pares = numeros
  .filter(valor => valor %2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador,valor) => acumulador += valor)
 console.log(pares)