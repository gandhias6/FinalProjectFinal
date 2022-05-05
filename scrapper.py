import json
from msilib.schema import Error
from numpy import save
import requests
from bs4 import BeautifulSoup
from sklearn.metrics import consensus_score

BASE_URL = "https://www.screener.in/company/{0}/consolidated/"

stocksInfo = []

companies = ["ACC", "ADANIENT", "ADANIPORTS", "AMBUJACEM", "APOLLOHOSP", "ASIANPAINT", "AUROPHARMA", "AXISBANK", "BAJAJ-AUTO", "BAJAJHLDNG", "BAJAJFINSV", "BANKBARODA", "BERGEPAINT", "BHARTIARTL", "BIOCON", "BPCL", "BRITANNIA", "ZYDUSLIFE", "CHOLAFIN", "CIPLA", "COALINDIA", "DABUR", "DIVISLAB", "DLF", "DRREDDY", "EICHERMOT", "GAIL", "GODREJCP", "GRASIM", "HAVELLS", "HDFC", "HDFCBANK", "HINDALCO",
             "HINDPETRO", "HINDUNILVR", "ICICIBANK", "INDUSTOWER", "INFY", "IOC", "ITC", "JINDALSTEL", "JSWSTEEL", "JUBLFOOD", "KOTAKBANK", "LT", "LUPIN", "M&M", "MARICO", "MARUTI", "MCDOWELL-N", "NAUKRI", "NTPC", "ONGC", "PEL", "PIDILITE", "PNB", "POWER GRID", "RELIANCE", "SAIL", "SBIN", "SUNPHARMA", "TATACONSUM", "TATAMOTORS", "TATASTEEL", "TCS", "TECHM", "TITAN", "TORRENTPHARM", "ULTRACEMCO", "UPL", "VEDL", "WIPRO"]


def getData(company_name):
    data = {"company_name": company_name, "data": []}
    url = BASE_URL.format(company_name)
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    dates_trs = [td.text for td in soup.select(
        "#profit-loss thead th:not(:first-child)")]
    sales_tds = [td.text for td in soup.select(
        "#profit-loss tr:nth-child(1) > td:not(:first-child)")]
    operatingProfit_tds = [td.text for td in soup.select(
        "#profit-loss tr:nth-child(3) > td:not(:first-child)")]
    netProfit_tds = [td.text for td in soup.select(
        "#profit-loss tr:nth-child(10) > td:not(:first-child)")]
    eps_tds = [td.text for td in soup.select(
        "#profit-loss tr:nth-child(11) > td:not(:first-child)")]

    for td in zip(dates_trs, sales_tds, operatingProfit_tds, netProfit_tds, eps_tds):
        data["data"].append(
            {"Date": td[0], "Sales": td[1], "Operating Profit": td[2], "Net Profit": td[3], "EPS": td[4]})

    if len(data["data"]) == 0:
        print("Sorry, no data found for {0}".format(company_name))
        return None
    return data


def saveData(company_name):
    data = getData(company_name)
    if not data:
        return
    stocksInfo.append(data)


for company_name in companies:
    saveData(company_name)

with open("stocksInfo.json", "w") as f:
    json.dump(stocksInfo, f, indent=4)
