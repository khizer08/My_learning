lst = [1, 2, 3, 2, 4, 5, 1, 6]

duplicates = set()

for i in lst:
    if lst.count(i) > 1:
        duplicates.add(i)

print("Duplicate elements:", duplicates)