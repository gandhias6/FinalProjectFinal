from copyreg import constructor
import csv
import json
rows = []
with open('DATASETT_8_4 (2).csv', encoding="utf-8") as f:
    csvreader = csv.reader(f)
    for row in csvreader:
        rows.append(row)

res = {}
for row in rows[1:]:
    print(len(row))
    if row[0] not in res:
        res[row[0]] = []
    res[row[0]].append({'Date': row[1], 'Sales': row[2], 'Expenses': row[3], 'Operating_Profits': row[4], 'Net_Profit': row[5], 'Other_Income': row[6], 'Interest': row[7], 'Depriciation': row[8],
                       'Profit_Before_Tax': row[9], 'Tax_Percent': row[10], 'OPM_Percent': row[11], 'Divident_Payout': row[12], 'EPS': row[13], 'prev_price': row[14], 'prev_eps': row[15], 'Price': row[16]})
print(res["ACC"])

op = []
for key in res:
    op.append({"company_name": key, "data": res[key]})

with open("data.json", "w") as f:
    json.dump(op, f)
