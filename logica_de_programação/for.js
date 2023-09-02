// i = index 
for(let i = 0; i<=10; i++){
    const par = i % 2 === 0 ? "par" : "impar"
    console.log(i, par)
}

const frutas = ['maçã', 'pêra','uva'];

for(let n = 0; n<=frutas.length; n++){
    console.log(`Indice ${n}`,frutas[n]);
}