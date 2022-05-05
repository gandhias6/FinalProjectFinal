import json
import random

stockData = []

with open("./components/StockData.json") as f:
    stockData = json.load(f)

for stock in stockData:
    stock["data"] = []
    for i in range(1, 10):
        stock["data"].append(
            {"price": random.randint(1, 100), "date": f"01/0{i}/2020"})
with open("./components/StockData_2.json", "w") as f:
    json.dump(stockData, f)
    print("Done")
