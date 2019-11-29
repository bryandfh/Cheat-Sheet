import requests
from bs4 import BeautifulSoup

session = requests.Session()
page = session.get('https://www.collinsdictionary.com/dictionary/german-english/junge', headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(page.text, 'html.parser')
artist_name_list = soup.find(class_='Translation')
print(soup)