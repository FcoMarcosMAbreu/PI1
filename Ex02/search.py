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
if (args.depth < 0):
    print("Defina uma profundidade de busca maior ou igual a 0.")
    quit()

requests_cache.install_cache('banco_de_acessos')
""" Item 5 achieved! """

def search(keyword, url, depth):
    response = requests.get(url, verify=False)
    soup = BeautifulSoup(response.text, 'html5lib')
    occurrences = soup.find_all(string=re.compile(keyword))
    for occurrence in occurrences:
        context = occurrence.split(keyword)
        print(context[0][-20:] + keyword + context[1][:20])
    """ Item 1 and 2 achieved! """    
    if (depth > 0):
        links = soup.find_all(href=re.compile(".+"))
        for link in links:
            """ 1. Caminho relativo """
            href = ""
            if (re.search("^\/", link['href'])):
                match = re.search("^http.+\.\w+", url)
                domain = ""
                if match:
                    domain = match.group() + "/"
                href = domain + link['href'][1:]
            """ 2. Redirecionamento pra Id """
            if (re.search("^#", link['href'])):
                if (re.search("\.w+\/$", url)):
                    href = url + link['href']
                else:
                    href = url + '/' + link['href']
            """ 3. URL sem protocolo """
            if (re.search("^(\w+\.)+", link['href'])):
                href = "https://" + link['href']
            if (len(href) > 0):
                print(href)
                search(keyword, href, depth - 1)

search(args.keyword, args.url, args.depth)
""" Item 3 achieved! """