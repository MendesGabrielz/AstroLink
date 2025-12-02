document.addEventListener('DOMContentLoaded', initMenu);

function initMenu() {
    setupSidebarMenu();
    showWelcome(); // mostra Bem-vindo ou Usuário

}

function setupSidebarMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const openBtn = document.getElementById('openMenuButton');
    const closeBtn = document.getElementById('closeMenuButton');

    const showSidebar = (e) => {
        e.preventDefault();
        sidebar.classList.add('active');
    };

    const hideSidebar = (e) => {
        if (e) e.preventDefault();
        sidebar.classList.remove('active');
    };

    openBtn.addEventListener('click', showSidebar);
    closeBtn.addEventListener('click', hideSidebar);

}

function showWelcome() {
    const area = document.getElementById('welcome');
    if (!area) return;

    const user = localStorage.getItem('email');

    if (user) {
        area.innerHTML = `Bem-vindo,<strong> ${user}</strong>`;
    } else {
        area.innerHTML = `Bem-vindo, <a href="../login/login.html" style="font-weight: bold;">Usuário</a>`;
    }

    // Esconde o botão de sair se não estiver logado
    const sairBtns = document.querySelectorAll('a[onclick*="logout"]');
    sairBtns.forEach(btn => {
        const liParent = btn.closest('li');
        if (liParent) {
            liParent.style.display = user ? 'block' : 'none';
        }
    });
}

function logout() {
    localStorage.removeItem('email');
    alert('Você saiu da sua conta!');
    window.location.href = window.location.href; // Recarrega a página
}


