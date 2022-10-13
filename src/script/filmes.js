var filmeEscolhido = []

async function idFilme(filme) {
    // var mensagemErro = document.getElementById("erro")
    // mensagemErro.innerHTML = "";
    try {
        var consultaId = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_o545bjp7/${filme}`)
        var idEditado = await consultaId.json();
        console.log(idEditado)

        var id = idEditado.results[0].id;
        console.log(id)
    } catch (erro) {
        alert("filme nao encontrado")
    } finally {
    var consultaFilme = await fetch(`https://imdb-api.com/en/API/Wikipedia/k_o545bjp7/${id}`);
    var filmeEditado = await consultaFilme.json();
    console.log(filmeEditado)
    
    var titulo = document.getElementById("titulo")
    var ano = document.getElementById("ano")
    var poster = document.getElementById("poster")
    var sinopse = document.getElementById("sinopse")
    
    titulo.innerHTML = filmeEditado.title
    ano.innerHTML = filmeEditado.year
    poster.src = idEditado.results[0].image
    sinopse.innerHTML = filmeEditado.plotShort.html
    }
}

var filme = document.getElementById("titulo-filme")
var busca = document.getElementById("btn-busca")
busca.addEventListener("click", () => idFilme(filme.value))


// var filme = {id: "", 
//     titulo: "", 
//     ano: "",    
//     imagem: "", 
//     sinopse: ""}