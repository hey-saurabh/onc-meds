#Code for Downloading Research articles using links retrieved
#the documents are downloaded from Sci-hub

import csv
import requests
from bs4 import BeautifulSoup
import wget
from tqdm import tqdm
import validators

def main():
    output = "" #Defining Output Directory

    with open("Path to CSV file with links", newline='', encoding='utf-8') as csvfile:       
        reader = csv.DictReader(csvfile)
        for row in tqdm(reader):
            url = row["link"]
            if url and validators.url(url):  # Check if URL is not empty and is valid
                try:
                    base_url = "https://sci-hub.se/"
                    response = requests.get(base_url + url.strip())
                    soup = BeautifulSoup(response.content, "html.parser")
                    content = soup.find("embed").get("src").replace("#navpanes-0&view=FitH", "").replace("//", "/")
                    if content.startswith('/downloads'):
                        pdf = 'https://sci-hub.se/' + content
                    elif content.startswith('/tree'):
                        pdf = 'https://sci-hub.se/' + content
                    elif content.startswith('/uptodate'):
                        pdf = 'https://sci-hub.se/' + content
                    else:
                        pdf = 'https:/' + content
        
                    wget.download(pdf, out=output)
                    with open("./PDFsFound.txt", "a") as pdfs:
                        pdfs.write(url.strip() + '\t' + pdf + '\n')
                #Writing a text file for which no PDFs are found
                except Exception as e:
                    with open('./PDFsNotFound.txt', 'a') as nopdfs:
                        nopdfs.write(url.strip() + '\n')
            else:
                #File for invalid URLs
                with open('./check/check_InvalidURLs.txt', 'a') as invalid_urls:
                    invalid_urls.write(url.strip() + '\n')

if __name__ == "__main__":
    main()