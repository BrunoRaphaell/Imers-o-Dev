var nome = "Guilherme" // Isso é um comentário.
var notaDoPrimeiroBimestre = 9.32123
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 7
var notaDoQuartoBimestre = 6.8

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
var notaFixada = notaFinal.toFixed(2)

console.log("bem vindo " + nome)
console.log("sua nota do primeiro bimestre foi " + notaDoPrimeiroBimestre)
console.log("sua nota final foi " + notaFixada)