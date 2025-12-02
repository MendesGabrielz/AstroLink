function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const erroSenha = document.querySelectorAll("#erro")[0];
    const erroTamanho = document.querySelectorAll("#erro")[1]; 

    if (password.length < 8) {
        erroTamanho.style.display = "block";
        erroSenha.style.display = "none";
        return;
    }

    const usuario = localStorage.getItem(email);

    if (!usuario) {
        erroSenha.textContent = "Usuário não encontrado!";
        erroSenha.style.display = "block";
        erroTamanho.style.display = "none";
        return;
    }

    const dados = JSON.parse(usuario);

    if (dados.password === password) {

        alert("Login realizado com sucesso!");
        localStorage.setItem('email', email);
        window.location.href = "../index.html";
    } else {
        erroSenha.textContent = "Senha incorreta!";
        erroSenha.style.display = "block";
        erroTamanho.style.display = "none";
    }
}
