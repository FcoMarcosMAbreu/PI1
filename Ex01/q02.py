import requests
from bs4 import BeautifulSoup

requis = requests.get('https://pages.cloudflare.com/')
""" requis = requests.get('https://google.com/') """
print(requis.status_code)
print(requis.headers['content-type'])
print(requis.encoding + '\n\n')
""" print(requis.text) """
""" print(requis.json()) """

soup = BeautifulSoup(requis.text, 'html.parser')
tag = input("Escolha uma tag: ")
tags = soup.find_all(tag)
for tag in tags:
    print(tag.get_text())