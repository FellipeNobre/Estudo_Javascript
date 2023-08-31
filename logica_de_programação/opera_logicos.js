/**
 * Operadores logicos
 * && -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU - Só retorna false se todas forem false,caso não vai ser true
 * !  -> NOT-> NÃO
 */

const expressaoAnd = true && true && true && true;
const expressaoOr = false || true || false || false
console.log(expressaoOr)

// ***************** //
const usuario = "Luiz"
const senha = 12345
const logar = usuario === "Luiz" && senha === 12345;
console.log(logar)

// ***************** //
console.log(!false)

// Curto-circuito
console.log("luiz" && undefined && "maria") 

// ***************** //
const corUsuario = null
const corPadrao = corUsuario || "preto"
console.log(corPadrao)

// ***************** //



