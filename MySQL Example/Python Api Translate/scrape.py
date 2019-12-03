from bs4 import BeautifulSoup # BeautifulSoup is in bs4 package 
import requests
import json

URL = "http://conjugador.reverso.net/conjugacion-aleman-verbo-sein.html"
content = requests.get(URL)
soup = BeautifulSoup(content.text, 'html.parser')
row = soup.find('div', { "class" : "blue-box-wrap"})
txt = row.get_text(separator=" ").split()

json_data =  { 
    "Ich": txt[2], 
    "Du": txt[4], 
    "Er/Sie/Es":txt[6],
    "Wir": txt[8],
    "Ihr": txt[10],
    "Sie/sie": txt[12]
    }

#json_ = json.dumps(json_data)

for i in range(len(txt)):
    if i%2 == 0 and i > 0:
        print (txt[i])