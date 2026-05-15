import json

# THIS IS FILE READING CODE
with open("data.json", "r") as f:
    data = json.load(f)

print(data)


# THIS IS FILE WRITING CODE
data = {
    "name": "khizer",
    "age": 22
}

with open("data.json", "w") as f:
    json.dump(data, f,indent=4,sort_keys=True)