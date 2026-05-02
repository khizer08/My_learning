words=["apple","banana","kiwi","cherry","mango"]

dict1={}
for i in range(len(words)):
    individual_val=words[i]
    dict1.update({individual_val:len(individual_val)})
print(dict1)