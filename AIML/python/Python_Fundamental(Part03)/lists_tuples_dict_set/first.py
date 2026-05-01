# #LISTS:-

list1=["khizer","120","ise",True]

list1.append(43)
list1.insert(0,"syed")

key="khizer"

for i in range(len(list1)):
    print(list1[i])
    if list1[i]=="khizer":
        print(f"index is: {i}")

list1.sort()
print(list1)
list1.reverse()
print(list1)


# #TUPLES:-

tup=("khizer","120","ise",True)

print(tup)
print(tup.count("khizer"))
print(tup.index("ise"))


#DICTIONARY:-

dict1={
    "name":"khizer",
    "srn":"R23EQ120",
    "marks":8.43
}

print(dict1)

print(dict1.get("name"))


# SETS:-

set1={1,3,2,"khizer",120}
print(set1)

set1.add(53)
print(set1)