#!/usr/bin/env python
# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup # BeautifulSoup is in bs4 package 
import requests
import json
import sys
import csv

verb = sys.argv[1]
URL = "http://conjugador.reverso.net/conjugacion-aleman-verbo- " + verb +".html" 
content = requests.get(URL)
soup = BeautifulSoup(content.text, 'html.parser')
row = soup.find('div', { "class" : "blue-box-wrap"})
txt = row.get_text(separator=" ").split()

json_data =  { 
    "Ich": txt[2], 
    "Du": txt[4], 
    "Er_Sie_Es":txt[6],
    "Wir": txt[8],
    "Ihr": txt[10],
    "Sie_sie": txt[12]
    }

data = ''
for i in range(2,13):
    if i%2 == 0:
        if i == 12:
            data += txt[i]
        else:
            data += txt[i] + ","

print(json.dumps(json_data, ensure_ascii=True).encode('utf8'))
sys.stdout.flush()