#Extract Tables of a PDF file as a CSV sheet

import tabula

tables = tabula.read_pdf("sample.pdf", pages="all")

for i, df in enumerate(tables):
    
    df.to_csv(f"all_pages_table{i}.csv", index=False)


#Extract Tables of a PDF in a Excel File

import pdfplumber
import tabula
import pandas as pd

def extract_tables_from_pdf(pdf_path):
    extracted_tables = {}

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()

            tables = tabula.read_pdf(pdf_path, pages=page.page_number, 
                                     multiple_tables=True, silent=True)
            
            if tables:
                extracted_tables[page.page_number] = tables

    return extracted_tables

pdf_path = "" #Path to PDF File

tables_dict = extract_tables_from_pdf(pdf_path)

with pd.ExcelWriter(f"{pdf_path}.xlsx") as writer:
    for page_number, tables in tables_dict.items():
        for i, table in enumerate(tables):
            sheet_name = f"Page_{page_number}_Table_{i + 1}"
            table.to_excel(writer, sheet_name=sheet_name, index=False)
