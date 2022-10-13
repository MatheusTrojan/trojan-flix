var filmes = []

async function buscaFilme(filme){
    var mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = "";
    
    try {
        var consultaFilme = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_o545bjp7/${filme}/`)
        var filmeEditado = await consultaFilme.json();
        if (filmeEditado.erro) {
            throw Error("Filme não encontrado!");
        }

        var id = filmeEditado.results[0].id
        var titulo = document.getElementById("titulo")
        var ano = document.getElementById("ano")
        var poster = document.getElementById("poster")


        titulo.innerHTML = filmeEditado.results[0].title
        ano.innerHTML = filmeEditado.results[0].description
        poster.src = filmeEditado.results[0].image

    } catch (erro) {
        mensagemErro.innerHTML = `<p>Filme não encontrado!</p>`
    }
    console.log(filmeEditado)
}


var filme = document.getElementById("titulo-filme")
var busca = document.getElementById("btn-busca")
busca.addEventListener("click", () => buscaFilme(filme.value))
