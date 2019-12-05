from bs4 import BeautifulSoup # BeautifulSoup is in bs4 package 
import requests
import json
import sys
import csv

while True:
    verb = input('Escribir verbo: \n')
    try:
        URL = "http://conjugador.reverso.net/conjugacion-aleman-verbo- " + verb +".html" 
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
        with open('verbs.csv', 'a', newline='', encoding='utf8') as file:
            writer = csv.writer(file)
            writer.writerow([verb, json_data['Ich'], json_data['Du'], json_data['Er/Sie/Es'], json_data['Wir'], json_data['Ihr'], json_data['Sie/sie']])
    except:
        print('Error')