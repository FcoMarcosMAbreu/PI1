document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});
function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    if (conteudo.length == 0) {
        alert("Preencha a caixa de texto!")
        document.getElementById("marcador").removeAttribute("hidden")
    } else {
        document.getElementById("marcador").setAttribute("hidden", true)
        document.getElementById('conteudo').innerHTML = conteudo;
    }
}