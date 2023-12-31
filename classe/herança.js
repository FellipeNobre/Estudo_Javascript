class DispositoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' Já ligado')
            return
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' Já desligado')
            return
        }

        this.ligado = false
    }
}

// extends - de quem vai herdar 
class samsung extends DispositoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new samsung('Samsung', 'Preto', 'S20')

console.log(s1)