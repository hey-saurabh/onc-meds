#Code to extract Sentences with certain keyword from the PDF

import re
from pdfminer.high_level import extract_text

# Extract text from the PDF
text = extract_text("sample.pdf")
print(text)

# Define the regular expression pattern
# pattern = re.compile(r'((?:[^.!?] *?[.!?]){2}.*?\b(cancer|treat(?:ment)?|therapy|chemotherapy|radiotherapy|radiation|surgery|immunotherapy|targeted therapy|palliative care)\b.*?(?:[^.!?] *?[.!?]){2})', re.IGNORECASE | re.DOTALL)
pattern = re.compile(r'((?:[^.!?] *?[.!?]){2}.*?\b(medicinal plants|herbal remedies|natural remedies|botanical treatments|plant-based therapies)\b.*?\b(cancer|treat(?:ment)?|therapy|chemotherapy|radiotherapy|radiation|surgery|immunotherapy|targeted therapy|palliative care)\b.*?(?:[^.!?] *?[.!?]){2})', re.IGNORECASE | re.DOTALL)


# Find all matches in the text
matches = pattern.findall(text)

# Extract context sentences and store them in results
results = []
for match in matches:
    context_sentence = match[0].strip()  # Extract the context sentence from the tuple
    results.append(context_sentence)    

print(results)

