#Script to highlight the sentences in the PDF with certain related terms using RegEx

import fitz
import os
import re
import csv
from pdfminer.high_level import extract_text
from tqdm import tqdm

def highlight_text_with_regex(input_folder, output_folder_matched, output_folder_unmatched, stats_file):
    # Prepare CSV file for statistics
    csv_headers = ["File Name", "Matches Found"]
    csv_rows = []

    # Ensure output folders exist
    os.makedirs(output_folder_matched, exist_ok=True)
    os.makedirs(output_folder_unmatched, exist_ok=True)

    # Iterate through each PDF file in the input folder
    for filename in tqdm(os.listdir(input_folder)):
        if filename.endswith(".pdf"):
            input_file = os.path.join(input_folder, filename)
            output_file = os.path.join(output_folder_matched, filename)
            unmatched_output_file = os.path.join(output_folder_unmatched, filename)
            total_matches = 0

            # Regex pattern for matching
            regex_pattern = r'((?:[^.!?]*?[.!?]){0,1}\b(medicinal plants|herbal remedies|botanical treatments|plant-based therapies|anti-?cancer|anti-?tumor|anti-tumour|treatment|therapy|chemotherapy|radiotherapy|radiation|surgery|immunotherapy|targeted therapy|palliative care|cancer|Unani)\b(?:[^.!?]*?[.!?]){0,1})'

            # Extract text from the PDF file
            text = extract_text(input_file)

            # Find all matches in the text using the compiled pattern
            matches = re.findall(regex_pattern, text, re.IGNORECASE | re.DOTALL)

            # Open the input PDF file
            pdf_doc = fitz.open(input_file)

            # Iterate through each page of the PDF
            for page_num in range(pdf_doc.page_count):
                page = pdf_doc[page_num]
                for match in matches:
                    match_str = match[0]  # Convert match object to string
                    text_instances = page.search_for(match_str)

                    if text_instances:
                        total_matches += len(text_instances)
                        for inst in text_instances:
                            x0, y0, x1, y1 = inst
                            page.draw_rect(fitz.Rect(x0, y0, x1, y1))

            try:
                # Save the modified PDF to the output folder
                if total_matches > 0:
                    pdf_doc.save(output_file)
                else:
                    os.rename(input_file, unmatched_output_file)
            except Exception as e:
                print(f"Error processing '{input_file}': {e}")
                try:
                    os.rename(input_file, unmatched_output_file)
                except PermissionError:
                    print(f"Permission denied: Unable to move '{input_file}' to unmatched folder.")

            # Close the PDF document
            pdf_doc.close()

            # Append statistics to the CSV rows
            csv_rows.append([filename, total_matches])

    # Write statistics to the CSV file
    with open(stats_file, "a+", newline="") as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(csv_headers)
        writer.writerows(csv_rows)

def main():
    
    input_folder = "" #Input folder path
    output_folder_matched = "" #Output matched folder path
    output_folder_unmatched = "" #Output unmatched folder path
    stats_file = "" #Log file path

    highlight_text_with_regex(input_folder, output_folder_matched, output_folder_unmatched, stats_file)


if __name__ == "__main__":
    main()