function mostrarFilmes (filmes) {
    var showFilme = document.getElementById("listaFilmes");
    showFilme.innerHTML += "<img src='" + filmes[filmes.length - 1] + "'>"
}

function verificarRepetidos(filmes, verificarFilme) {
    if (filmes.includes(verificarFilme)) {
        alert("Filme já adicionado!");
        return true
    } 
    return false
}

var listaFilmes = [];

function addFilme() {
    var filmeAdicionado = document.getElementById("filmeAdicionado").value;
    if (verificarRepetidos([...listaFilmes], filmeAdicionado)) {
        document.getElementById("filmeAdicionado").value = "";
        return;
    } 
    listaFilmes.push(filmeAdicionado);
    mostrarFilmes(listaFilmes);
    document.getElementById("filmeAdicionado").value = "";
} 

  