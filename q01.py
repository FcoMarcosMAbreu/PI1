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
anchors = soup.find_all('a')
for anchor in anchors:
    print(anchor.get('href'))