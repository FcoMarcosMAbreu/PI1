// selecione o botão usando o método getElementById
const botao: HTMLElement = document.getElementById("botao");
// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
    // selecione o parágrafo usando o método getElementById
    const paragrafo: HTMLElement = document.getElementById("paragrafo");
    // altere o texto do parágrafo
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});
// selecione o botão Limpar! usando o método getElementById
const botaoLimpar: HTMLElement = document.getElementById("limpar");
// adicionando um evento de clique ao botão
botaoLimpar.addEventListener("click", function() {
    // selecione o parágrafo usando o método getElementById
    const paragrafo: HTMLElement = document.getElementById("paragrafo");
    // altere o texto do parágrafo
    paragrafo.textContent = "";
});