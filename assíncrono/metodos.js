function rand(max,  min){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() *(max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{  
        if(typeof msg !== 'string') {
            reject(false)
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase()+ ' Passei na promise')
        }, tempo)
    })
}

//Promise.all / Promise.race / Promise.resolve / Promise.reject

const promise = [
   'Primeiro valor',
    esperaAi('Promise 1', 2000),
    esperaAi('Promise 2', 400),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000,1000),
    'Outro valor'
]


Promise.all(promise)
 .then(function(valor){
    console.log(valor)
})
 .catch(function(e){
    console.log(e)
 })


 ///////////////              //////////////////

 const promise2 = [
     esperaAi('Promise 1', rand(1,3)),
     esperaAi('Promise 2', rand(1,3)),
     esperaAi('Promise 3', rand(1,3))
 ]
 
 
 Promise.race(promise2)
  .then(function(valor){
     console.log(valor)
 })
  .catch(function(e){
     console.log(e)
  })

   ///////////////              //////////////////

function baixaPagina(){
    const emChace = false

    if(emChace){
        return Promise.resolve('Página em Cache') // reject cai no baixando a pagina
    }else{
        return esperaAi('Baixei', rand(1,3))
    }
}
baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina)
})
.catch(e => console.log(e))
