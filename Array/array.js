const nomes = ['Eduardo', 'Maria', 'Felipe'];
// nomes[2] = 'João'
// delete nomes[2]  // Permite deletar sem que os indices sejam alterados

nomes.pop(); // Remove o ultimo elemento do array
nomes.shift(); //  Remove o primeiro elemento do array

nomes.push('Nobre'); // Adiciona um elemento no final do array
nomes.unshift('Luiz') // Adiciona um elemento no começo do array

const novo = nomes.slice(0,2)
console.log(nomes)
console.log(novo)

const nome = "Luiz Otavio Miranda"
const junta = nome.split(' ') // Junta uma String em um array 
console.log(junta)

const nome2 = ["Luiz" ,"Otavio", "Miranda"]
const junta2 = nome2.join(" ") // Um array vira uma String
console.log(junta2)
