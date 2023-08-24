function addUser() {
    player1Name = document.getElementById("user").value;

        localStorage.setItem("Usuário", player1Name); //colocando no armazenamento local nome do jogador 1

        window.location = "game_page.html"; //redirecionando a página
}

