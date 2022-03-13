// Estudar no HTML telas responsivos.
// X Desafio 1: Colocar o link para quando clicar na imagem ir para a página do IMDB.
// X Desafio 2: Colocar a condição para não adicionar filmes repetidos.
// Desafio 3: Colocar um botão que quando coloca o link da imagem a capa do filme aparece. 

function removeDuplicates(arrayFilmes) {
    for (var i = 0; i < arrayFilmes.length; i++) {
        for (var j = i + 1; j < arrayFilmes.length; j++) {
            if (arrayFilmes[i].href === arrayFilmes[j].href) {
                arrayFilmes.splice(j, 1);
            }
        }
    }
    return arrayFilmes;
}

const filmes = [
    {href: "https://www.imdb.com/title/tt8079248/", imagem: "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg"},
    {href: "https://www.imdb.com/title/tt2543164/?ref_=fn_al_tt_1", imagem: "https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg"},
    {href: "https://www.imdb.com/title/tt8079248/", imagem: "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg"},
    {href: "https://www.imdb.com/title/tt0332379/?ref_=nv_sr_srsg_0", imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"},
    {href: "https://www.imdb.com/title/tt0332379/?ref_=nv_sr_srsg_0", imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"},
    {href: "https://www.imdb.com/title/tt2543164/?ref_=fn_al_tt_1", imagem: "https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg"},
    {href: "https://www.imdb.com/title/tt8079248/", imagem: "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg"}
]

var listaFilmesUnicos = removeDuplicates([...filmes])

console.log(filmes)

 for (var i = 0; i < listaFilmesUnicos.length; i++) {
    document.write("<a href='" + listaFilmesUnicos[i].href + "'>" + "<img src='" + listaFilmesUnicos[i].imagem + "'>" + "</a>")
}


