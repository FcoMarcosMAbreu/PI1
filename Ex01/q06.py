import requests
from bs4 import BeautifulSoup

response = requests.get('https://coinmarketcap.com/')
soup = BeautifulSoup(response.text, 'html.parser')
table = soup.find_all('table')
""" print(len(table)) """
print(table[0].get_text())