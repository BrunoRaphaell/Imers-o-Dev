// Estudar no HTML telas responsivos.
// Desafio 1: Colocar o link para quando clicar na imagem ir para a página do IMDB.
// Desafio 2: Colocar a condição para não adicionar filmes repetidos.
// Desafio 3: Colocar um botão que quando coloca o link da imagem a capa do filme aparece. 

var listaFilmes = [
    "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"
]

/*

function writeImage(element, index, array) {
    document.write("<img src='" + element + "'>")
}

listaFilmes.forEach(writeImage)

*/ 

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src='" + listaFilmes[i] + "'>")
}
