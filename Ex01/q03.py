import re
import requests
from bs4 import BeautifulSoup

""" requis = requests.get('https://pages.cloudflare.com/') """
""" requis = requests.get('https://google.com/') """
page = input("Escolha uma página: ")
""" print(page) """
requis = requests.get(page)
print(requis.status_code)
print(requis.headers['content-type'])
print(requis.encoding)
""" print(requis.text) """
""" print(requis.json()) """

soup = BeautifulSoup(requis.text, 'html.parser')
term = input("Escolha uma termo: ")
occurrences = soup.find_all(string=re.compile(term))
""" print(occurrences)
print('\n\n') """
for occurrence in occurrences:
    """ print(occurrence.find(term)) """
    context = occurrence.split(term)
    print(context[0][-20:] + term + context[1][:20])

