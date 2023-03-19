# Vídeo de apresentação:

(Buscador Web - Exercício 2 de Programação para Internet I)[https://youtu.be/YbSOOnvy0iU]

Crie um pequeno mecanismo de busca na WEB utilizando a linguagem Python e as bibliotecas Requests e Beautiful Soup. O script deve funcionar através de uma chamada de função como:

```python
search(keyword, url, depth):
```

    • keyword é uma palavra-chave a ser buscada;

    • url é um endereço inicial para a busca;

    • depth é a profundidade da busca a partir da url.

Utilize sempre a biblioteca requests-cache (https://requests-cache.readthedocs.io/en/latest/user_guide.html) para armazenar páginas recentemente baixadas e melhorar o tempo de resposta de suas buscas.

Funcionamento da busca:

1. Para a URL, o buscador baixará a página usando a biblioteca requests:

``` python
from bs4 import BeautifulSoup
import requests
response = requests.get('http://www.ifpi.edu.br/')
```

Dentro da página, deve ser buscada a keyword digitada.

2. Caso encontre o texto, deve-se guardar um trecho do texto contendo a palavra. O trecho deve conter a palavra e, por exemplo, 20 caracteres antes e 20 depois da palavra.

3. Caso a profundidade da busca seja maior que zero, a página baixada deve ser passada para a biblioteca Beautiful Soup para retirar extrair os links e realizar uma busca recursiva nos links da página. Veja o exemplo abaixo em que o atributo href é extraído dos links de uma página:

``` python
html = BeautifulSoup(response.text, 'html5lib')
links = html.find_all('a')
for link in links:
print(link['href'])
```

4. Implemente um mecanismo para ranquear ou dar relevância nas páginas exibindo primeiro as páginas principais e depois as secundárias de acordo com critérios a serem definidos:

    • Um critério deve ser a quantidade de referências para uma página, que contará de forma positiva para o ranqueamento;

    • Um segundo critério deve afetar de forma negativa o ranqueamento;

    • Defina um último critério para dar ou retirar relevância da página.

5. Pesquise como salvar as páginas em um banco pra evitar que requisições idênticas façam novas requisições, ainda que as páginas estejam em cache. Verificar última atualização da página ou data em que foi salva/pesquisada pela última vez pode ser uma forma de evitar buscas repetidas.

Implemente em um ambiente simulado, criando as páginas e rodando via “live server” ou similar. Posteriormente, sempre usando cache, rode seus “experimentos” em páginas reais.

### Exemplo:

``` python
import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint

requests_cache.install_cache('banco')
response = requests.get('https://www.reddit.com/r/investimentos/', verify=False)
soup = BeautifulSoup(response.text, 'html.parser')
cabecalhos = soup.find_all('h3')
for cabecalho in cabecalhos:
    texto = cabecalho.get_text()
    print(" - ", texto)
```

### Embeded server

https://www.askpython.com/python-modules/python-httpserver

``` sh
cd server/
python -m http.server 9000
```
