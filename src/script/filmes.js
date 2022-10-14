async function idFilme(filme) {
    var mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = "";
    try {
        var consultaId = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_o545bjp7/${filme}`)
        var idEditado = await consultaId.json();
        var id = idEditado.results[0].id;

    } catch (erro) {
        alert("filme nao encontrado")

    } finally {
    var consultaFilme = await fetch(`https://imdb-api.com/en/API/Wikipedia/k_o545bjp7/${id}`);
    var filmeEditado = await consultaFilme.json();

    var consultaNota = await fetch(`https://imdb-api.com/en/API/Ratings/k_o545bjp7/${id}`)
    var notaEditado = await consultaNota.json();
    
    var titulo = document.getElementById("titulo")
    var nota = document.getElementById("nota")
    var poster = document.getElementById("poster")
    var sinopse = document.getElementById("sinopse")

    // var novoCartao = {
    //     tituloFilme: filmeEditado.fullTitle,
    //     notaFilme: "Nota IMDb: " + notaEditado.imDb,
    //     posterFilme: idEditado.results[0].image,
    //     sinopseFilme: filmeEditado.plotShort.html
    // }

    titulo.innerHTML = filmeEditado.fullTitle
    nota.innerHTML = "Nota IMDb: " + notaEditado.imDb
    poster.src = idEditado.results[0].image
    sinopse.innerHTML = filmeEditado.plotShort.html
    }
}

function removeClasse(){
    var cartao = document.getElementById("cartao")
    cartao.classList.remove("hidden")
}

var filme = document.getElementById("titulo-filme")
var busca = document.getElementById("btn-busca")

busca.addEventListener("click", () => idFilme(filme.value))
busca.addEventListener("click", () => removeClasse())