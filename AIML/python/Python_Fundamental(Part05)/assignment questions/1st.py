data = []

with open("names.txt", "w") as f:
    for i in range(1, 6):
        names = input(f"Enter the name {i}: ")
        data.append(names)

    for name in data:
        f.write(name + "\n")

with open("names.txt", "r") as f:
    output = f.read()
    print(output)