// IIFE 

(function(idade,peso,altura){
    const sobrenome = 'Miranda'
    function CriaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(CriaNome('Luiz'))
    }

    falaNome()
    console.log(idade,peso,altura)
})(20,80,170)
