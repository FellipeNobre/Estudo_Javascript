function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {};

    pessoaPrototype.falar = function() {
        console.log(`${this.nome} está falando`);
    };

    pessoaPrototype.comer = function() {
        console.log(`${this.nome} está comendo`);
    };

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Nobre');
p1.falar(); 
