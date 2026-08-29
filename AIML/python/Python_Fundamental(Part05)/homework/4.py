import json
data={
    "bengaluru":"50lakhs",
    "shivmoga":"20lakhs",
    "kolar":"8lakhs"
}
with open ("cities.json","w") as f:
    json.dump(data,f,indent=4,sort_keys=True)

with open("cities.json","r") as f:
    data=json.load(f)
print(data)

n=int(input("Enter the number of entries you want to enter: "))
for i in range(0,n):
    city=input("Enter city name: ")
    population=input("Enter city's population: ")
    data[city]=population


with open ("cities.json","w") as f:
    json.dump(data,f,indent=4,sort_keys=True)