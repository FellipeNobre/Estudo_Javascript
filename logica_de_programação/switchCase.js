function dia(diaSemana){
 let texto;
 switch (diaSemana) {
    case 0:
        console.log ( texto = "Domingo")
        return diaSemana

    case 1:
        console.log( texto = "Segunda")
        return diaSemana

    case 2:
       console.log (texto = "Terça")
       return diaSemana

    case 3:
        console.log( texto = "Quarta")
        return diaSemana

    case 4:
        console.log(texto = "Quinta")
        return diaSemana

    case 5:
        console.log  (texto = "Sexta")
        return diaSemana

    case 6:
        console.log  (texto = "Sabado")
        return diaSemana
    default:
        console.log("Erro")
        return diaSemana
 }
}

const data = new Date("2004-07-07")
const diaSemana = data.getDay()
const texto = dia(diaSemana)

console.log(diaSemana)