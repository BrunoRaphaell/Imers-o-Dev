/* Desafio 1: Colocar o número de tentativas. Aprender laço de repetição
   Desafio 2: Qual a diferença de dois iguais para 3 iguais. */

// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".

var numeroSecreto = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10

function Chutar() {
    var numeroChutado = parseInt(document.getElementById("valor").value);
    console.log(numeroChutado)
    if (numeroChutado == numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Você acertou! o numero secreto era " + numeroSecreto;
    } else if ( numeroChutado < 0 || numeroChutado > 10 ) {
        document.getElementById("resultado").innerHTML = "Você deve digitar um número entre 0 e 10"
    } else if (numeroChutado < numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Você errou, o numero secreto é maior!";
    } else {
        document.getElementById("resultado").innerHTML = "Você errou, o numero secreto é menor!";
    }
}