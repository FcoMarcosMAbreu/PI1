import requests

cep = input("Digite o CEP: ")
reponse = requests.get(f'https://cdn.apicep.com/file/apicep/{cep}.json')
print(reponse.text)