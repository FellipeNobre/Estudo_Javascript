// Factory function (Função fábrica)

function pessoa(nome, sobrenome,altura,peso) {
    return {
        nome,
        sobrenome,

        // Getter
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter

        set nomeCompleto(valor){
           valor = valor.split(' ');
            this.nome = valor.shift()
            console.log(valor)
        },
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
       get imc(){
            const calculo = this.peso / (this.altura ** 2)
            return calculo.toFixed(2)
        }
    };
}


const p1 = pessoa('Luiz', 'Nobre', 1.8, 80);
console.log(p1.nomeCompleto)
console.log(p1.imc)
p1.nomeCompleto = 'Fellipe Nobre'

console.log(p1.fala('falando sobre JavaScript')); // Chama o método fala e exibe a saída

