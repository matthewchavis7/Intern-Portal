import requests
from bs4 import BeautifulSoup

url = "https://www.linkedin.com/company/pinnacle-solutions-inc./people/"
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

targets = [
           "Jonah Minihan", "Caleb Solomon", "Max Britton", "Joshua Bradshaw", "Dennis O'Dell", "Adam Smith", "Jason Terry", "Kimberly Czerniewski",
           "Tina Tucker", "Isla Hamill", ""
        ]

images = []
Names = []
Titles = []

