#Code To Scrape Search Engine Result Page Into a Spreadsheet

from serpapi import GoogleSearch
from urllib.parse import urlsplit, parse_qsl
import pandas as pd

def scrape_organic_results():
    params = {
        "api_key": "<API-Key>",
        "engine": "google_scholar",
        "q": "<Query>",
        "hl": "en",
        "num": "20",
        "start": "0"
    }
    search = GoogleSearch(params)
    organic_results_data = []

    while True:
        results = search.get_dict()
        print(f"Extracting publications from page {results.get('serpapi_pagination', {}).get('current')}")

        for result in results.get("organic_results", {}):
            position = result.get("position")
            title = result.get("title")
            publication_info_summary = result.get("publication_info", {}).get("summary")
            result_id = result["result_id"]
            link = result.get("link")
            result_type = result.get("type")
            snippet = result.get("snippet")

            try:
                file_title = result["resources"][0]["title"]
            except:
                file_title = None
            try:
                file_link = result["resources"][0]["link"]
            except:
                file_link = None

            try:
                file_format = result["resources"][0]["file_format"]
            except:
                file_format = None

            try:
                cited_by_count = int(result["inline_links"]["cited_by"]["total"])
            except:
                cited_by_count = None

            cited_by_id = result.get("inline_links", {}).get("cited_by", {}).get("cites_id", {})
            cited_by_link = result.get("inline_links", {}).get("cited_by", {}).get("link", {})

            try:
                total_versions = int(result["inline_links"]["versions"]["total"])
            except:
                total_versions = None

            all_versions_link = result.get("inline_links", {}).get("versions", {}).get("link", {})
            all_versions_id = result.get("inline_links", {}).get("versions", {}).get("cluster_id", {})

            organic_results_data.append({
                "page_number": results.get("serpapi_pagination", {}).get("current"),
                "position": position + 1,
                "result_type": result_type,
                "title": title,
                "link": link,
                "result_id": result_id,
                "publication_info_summary": publication_info_summary,
                "snippet": snippet,
                "cited_by_count": cited_by_count,
                "cited_by_link": cited_by_link,
                "cited_by_id": cited_by_id,
                "total_versions": total_versions,
                "all_versions_link": all_versions_link,
                "all_versions_id": all_versions_id,
                "file_format": file_format,
                "file_title": file_title,
                "file_link": file_link,
            })

        if "next" in results.get("serpapi_pagination", {}):
            search.params_dict.update(dict(parse_qsl(urlsplit(results["serpapi_pagination"]["next"]).query)))
        else:
            break

    return organic_results_data

def save_organic_results_to_csv():
    print("Waiting for organic results to save...")
    organic_df = pd.DataFrame(data=scrape_organic_results())
    organic_df.to_csv("google_scholar_organic_results.csv", encoding="utf-8")

def main():
    save_organic_results_to_csv()

if __name__ == "__main__":
    main()