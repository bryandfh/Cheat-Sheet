import pymysql
db = pymysql.connect("localhost","bryan","test123","german", cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()
cursor.execute("SELECT Noun, Artikel FROM artikel LIMIT 2")
data = cursor.fetchall()
db.close()

print(data[0])