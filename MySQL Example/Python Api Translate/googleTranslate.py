from googletrans import Translator
translated = Translator().translate('Katze', src='de', dest='es')
print(translated.text)