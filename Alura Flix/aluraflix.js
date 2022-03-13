// Estudar no HTML telas responsivos.
// X Desafio 1: Colocar o link para quando clicar na imagem ir para a página do IMDB.
// Desafio 2: Colocar a condição para não adicionar filmes repetidos.
// Desafio 3: Colocar um botão que quando coloca o link da imagem a capa do filme aparece. 

// href_IMDB, link_imagem
var listaFilmes = new Map([
    ["https://www.imdb.com/title/tt8079248/", "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg"],
    ["https://www.imdb.com/title/tt2543164/?ref_=fn_al_tt_1", "https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg"],
    ["https://www.imdb.com/title/tt0332379/?ref_=nv_sr_srsg_0", "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"]
])

for (var [key, value] of listaFilmes) {
    document.write("<a href='" + key + "'>" + "<img src='" + value + "'>" + "</a>")
}
