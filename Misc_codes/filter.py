#Python Script to check PDF with certain keywords and move the PDFs with keywords to a new directory

import os
import shutil
import PyPDF2
from tqdm import tqdm

# Function to search for keywords in a PDF file
def search_keywords_in_pdf(pdf_path, keywords):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for page_num in range(len(reader.pages)):
                text += reader.pages[page_num].extract_text()

            for keyword in keywords:
                if keyword.lower() in text.lower():
                    return True
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
    return False

# Function to filter PDF files based on keywords
def filter_pdfs_by_keywords(source_dir, dest_dir, keywords):
    try:
        os.makedirs(dest_dir, exist_ok=True)
        if not os.path.exists(source_dir):
            print(f"Source directory '{source_dir}' does not exist.")
            return
        pdf_files = [filename for filename in os.listdir(source_dir) if filename.endswith('.pdf')]
        with tqdm(total=len(pdf_files), desc="Filtering PDFs") as pbar:
            for filename in pdf_files:
                file_path = os.path.join(source_dir, filename)
                if search_keywords_in_pdf(file_path, keywords):
                    shutil.move(file_path, os.path.join(dest_dir, filename))
                pbar.update(1)
    except Exception as e:
        print(f"Error occurred: {e}")

def main():
    source_directory = '' #Source Directory
    destination_directory = '' #Destination Directory
    keywords_to_search = [] #Keywords to search for

    filter_pdfs_by_keywords(source_directory, destination_directory, keywords_to_search)

if __name__ == "__main__":
    main()