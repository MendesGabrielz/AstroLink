function criarConta() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const erro = document.getElementById("erro");
    const sucesso = document.getElementById("conta-criada");

    if (password.length < 8) {
        erro.style.display = "block";
        sucesso.style.display = "none";
        return;
    }

    const usuario = { email, password };
    localStorage.setItem(email, JSON.stringify(usuario));


    erro.style.display = "none";
    sucesso.style.display = "block";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}
