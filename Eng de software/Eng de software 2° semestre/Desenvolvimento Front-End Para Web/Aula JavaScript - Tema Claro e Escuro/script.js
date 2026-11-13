const botao = document.getElementById("botaotema");
const icone = document.getElementById("icone");
const textoBotao = document.getElementById("textobotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    const temaEscuroAtivado = document.body.classList.toggle("escuro");

    botao.setAttribute("aria-pressed", String(temaEscuroAtivado));

    if (temaEscuroAtivado) {
        icone.innerHTML = "&#9728;";
        textoBotao.textContent = "Modo claro";
        mensagem.textContent = "Estamos utilizando o tema escuro.";
    } else {
        icone.innerHTML = "&#9790;";
        textoBotao.textContent = "Modo escuro";
        mensagem.textContent = "Estamos utilizando o tema claro.";
    }
});
