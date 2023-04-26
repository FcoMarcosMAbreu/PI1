# Exercício 8

Considere o seguinte trecho de código onde obtemos o valor de um campo de texto e exibimos em uma div:

Arquivo index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Exibindo Conteúdo de uma Caixa de Texto</title>
</head>
<body>
    <label for="caixaDeTexto">Digite o texto:</label>
    <input type="text" id="caixaDeTexto">
    <button id="botaoExibir">Exibir</button>
    <div id="conteudo"></div>
    <script src="script.js"></script>
</body>
</html>
```

Arquivo script.js

```javascript
document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});
function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    document.getElementById('conteudo').innerHTML = conteudo;
}
```

1) Altere o código anterior validando se o campo foi preenchido. Para isso, verifique se o conteúdo passado é uma string vazia e exiba uma mensagem de erro nesse caso. Você pode exibir um alert do JS ou mesmo escrever na div algo com a fonte “vermelha”.

2) Crie uma página com 2 campos e um botão. Crie também um script que realize alguma operação matemática entre os dois campos. Além disso, aceite apenas números fazendo a validação com a função isNaN().

3) Carregue uma imagem em um componente img a partir de um endereço relativo de uma imagem no seu “disco”. Para isso, tenha uma caixa de texto onde se digite o nome da imagem, uma div com id “resultado” e um botão que ao ser clicado, carrega a imagem. Para isso, considere que:

    a) document.createElement() é uma função que deve ser usada para criar a tag img;

    b) Podemos alterar o atributo src de uma imagem da seguinte forma: img.src = conteudo; //onde conteúdo é o endereço da imagem vinda de uma caixa de texto;

    c) Por fim, podemos adicionar a imagem à div: resultado.appendChild(img).

        https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

4) Altere o exemplo anterior para que ele funcione com um componente select em que o value dos componentes sejam os endereços de 3 imagens. Ao mudar o conteúdo do componente, a imagem específica deve ser carregada.

        https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

5) Crie uma funcionalidade com vários checkboxes e valide se pelo menos um checkbox foi marcado. Utilize a função document.getElementsByName(nome) e percorra o array de componentes retornado testando a propriedade checked.

6) Escreva uma função que receba um texto como parâmetro e uma opção vinda de um select (maiúsculo ou minúsculo) e exiba o texto convertido de acordo com a opção.

7) Crie uma funcionalidade em que o usuário digite um texto e clique em um botão. Ao clicar no botão, o texto deve ser inserido em um componente select com atributo size = 5. Para isso, use a função createElement() vista anteriormente para criar tags option e use a função appendChild para dicionar a opção criada no select.

8) Altere a questão anterior para não permitir opções repetidas e nem vazias. Além disso, não deixe que passe de 5 elementos.

9) Crie um botão que remova um item selecionado do select. Para isso, utilize a propriedade selectedOptions e a função removeChild do componente select

        https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions

        https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

10) Com base no exemplo feito na aula passada e disponibilizado anteriormente pela aluna Cibelle, crie uma funcionalidade com dois selects e dois botões que transfiram itens de um select para o outro.
