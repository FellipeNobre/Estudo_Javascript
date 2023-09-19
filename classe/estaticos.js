class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    Aumentavolume(){
        this.volume += 2
    }

    diminuir(){
        this.volume -= 2
    }

    // Método de estático
    static trocaPilha(){
        console.log('Trocar pilha')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.Aumentavolume() // Método de instância
ControleRemoto.trocaPilha() // Método de estático
console.log(controle1)