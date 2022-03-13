// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

var listaFilmes = ["Yesterday", "A chegada", "Escola de rock"]

// Adicionando um elemento ao final da lista:
listaFilmes.push("Harry Potter")

//Adicionando um elemento o início da lista:
listaFilmes.unshift("Avengers")

/*

Trabalhando com forEach 1:

listaFilmes.forEach(function(nome, i, array) {
    document.write("<h1>" + i +"</h1>")
})

// Trabalhando com o for:

for (var indice = 0 ; indice < listaFilmes.length; indice++) {
    document.write("<h1>" + listaFilmes[indice] +"</h1>")
}

// Trabalhandom com o forEach 2:

function writeArrayElements (element, index, array) {
    document.write("<h1>" + element +"</h1>")
}

listaFilmes.forEach(writeArrayElements)

*/

for (var indice = 0 ; indice < listaFilmes.length; indice++) {
    document.write("<h1>" + listaFilmes[indice] +"</h1>")
}

