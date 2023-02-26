import datetime
import requests
from bs4 import BeautifulSoup

query = input("Faça sua busca: ")
""" query = "drums guitars" """
query = query.split()
tmp = ''
for word in query:
    tmp += word + "+"
query = tmp[:-1]
response = requests.get(f'https://google.com/search?q={query}')

""" print(response.status_code)
print(response.headers['content-type'])
print(response.encoding + '\n') """

""" with open('results' + datetime.datetime.now().strftime("%H%M%S") + '.html', 'w') as file:
    file.write(response.text) """

soup = BeautifulSoup(response.text, 'html.parser')
results = soup.select("a h3")
""" print(len(results))
print('\n') """
for result in results:
    print(result.get_text())
    print(result.parent.parent.parent.get('href').split('/url?q=')[1].split('&')[0])
    print(result.parent.parent.parent.parent.parent.contents[1].get_text())
    print('\n')


