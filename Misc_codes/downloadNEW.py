#Code to download research articles using links from sources available on web

import os
import requests
from tqdm import tqdm

def download_pdf_from_links(file_path, output_dir, error_log_file):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Read the links from the text file
    with open(file_path, 'r') as file:
        links = file.readlines()

    # Initialize list to keep track of failed links
    failed_links = []

    # Download PDF files from each link
    for link in tqdm(links, desc="Downloading PDFs", unit="file"):
        link = link.strip()  # Remove leading/trailing whitespaces and newlines
        try:
            response = requests.get(link, stream=True)
            if response.status_code == 200:
                # Check if the response content type is PDF
                if 'application/pdf' in response.headers.get('content-type', ''):
                    # Extract the filename from the URL
                    filename = os.path.join(output_dir, link.split('/')[-1])
                    with open(filename, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=1024):
                            if chunk:
                                pdf_file.write(chunk)
                    print(f"Downloaded {filename}")
                else:
                    failed_links.append(link)
                    print(f"Failed to download from {link}: Not a PDF file")
            else:
                failed_links.append(link)
                print(f"Failed to download from {link}: {response.status_code}")
        except Exception as e:
            failed_links.append(link)
            print(f"Error downloading from {link}: {e}")

    # Write failed links to error log file
    if failed_links:
        with open(error_log_file, 'w') as error_file:
            for failed_link in failed_links:
                error_file.write(f"{failed_link}\n")
        print(f"Failed links written to {error_log_file}")


if __name__ == "__main__":
    file_path = ""  # Path of text file containing links
    output_directory = ""  # Directory to save the PDFs
    error_log_file = ""  # Path of the error log file
    print("START")
    download_pdf_from_links(file_path, output_directory, error_log_file)
    print("COMPLETE")
