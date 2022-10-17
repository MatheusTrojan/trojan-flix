function logar () {
    var user = document.getElementById("username")
    var senha = document.getElementById("senha")

    if (user.value == "admin@admin.com" && senha.value == "123456") {
        localStorage.setItem("acesso", true);

        alert("Credenciais validadas com sucesso! Bem Vindo!");

        window.location.href = "filmes.html";
    } else {
        alert("Usuário ou senha incorretos!")
        user.value = ""
        senha.value = ""
    }
}

