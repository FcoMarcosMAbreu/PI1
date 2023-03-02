import re
import argparse
from bs4 import BeautifulSoup
import requests
import requests_cache

parser = argparse.ArgumentParser()
parser.add_argument("-k", "--keyword", type=str)
parser.add_argument("-u", "--url", type=str)
parser.add_argument("-d", "--depth", type=int)

args = parser.parse_args()
""" print(args.keyword)
print(args.url)
print(args.depth) """
""" print(args) """

requests_cache.install_cache('banco_de_acessos')
response = requests.get(args.url, verify=False)
soup = BeautifulSoup(response.text, 'html5lib')
occurrences = soup.find_all(string=re.compile(args.keyword))
for occurrence in occurrences:
    context = occurrence.split(args.keyword)
    print(context[0][-20:] + args.keyword + context[1][:20])
""" Item 1 and 2 achieved! """
""" links = soup.find_all('a')
for link in links:
    print(link['href']) """