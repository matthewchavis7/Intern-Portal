import requests
from bs4 import BeautifulSoup

url = "https://www.akima.com/leadership/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"
}
#Webscraper because I am very lazy
try:
    res = requests.get(url, headers=headers)
    res.raise_for_status()  
except requests.exceptions.RequestException as e:
    print(f"Error fetching URL: {e}")
    exit()

soup = BeautifulSoup(res.content, "html.parser")

images = []
Names = []
Titles = []

leader_bodies = soup.find_all("div", class_="leader__body")
for img in soup.find_all("img"):
    src = img.get('src')
    if src:
        images.append(src)
for leader_body in leader_bodies:
    
    name = leader_body.find("h3", class_="leader__name")
    if name:
        Names.append(name.text.strip())

    title = leader_body.find("p", class_="leader__position")
    if title:
        Titles.append(title.text.strip())


print("Images found:")
print(images)
print()

print("Names Found")
print(Names)
print()

print("Titles Found")
print(Titles)


