import requests
import shutil

img = input("Informe a URL da imagem: ")
response = requests.get(img, stream=True)
print(response.status_code)
print(response.headers['content-type'])
with open('img.png', 'wb') as output:
    shutil.copyfileobj(response.raw, output)
del response