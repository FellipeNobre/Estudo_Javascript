function soma(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
      throw ("precisa ser números")
    }

    return a + b;
}

try{
console.log(soma(1,22))
console.log(soma('1',22))
}catch(error){
    console.log(error)
}


function retornaHora(data){
    if(data && !(data instanceof Date)){
       throw new TypeError("Esperadando um Date")
    }
    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        minute: '2-digit',
        second: '2-digit',
        hour: '2-digit'
    })
}

try{
    const hora = retornaHora()
    console.log(hora)
}catch(e){
    console.log("Erro")
}
