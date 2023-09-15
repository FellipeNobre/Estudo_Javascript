function recursiva(max){
    if (max >= 1000) return
    max ++;
    console.log(max)
    recursiva(max) // Chama a função junto com o parâmetro dela 
}

recursiva(-10)