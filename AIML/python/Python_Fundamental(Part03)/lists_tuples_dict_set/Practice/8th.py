list1=[1,2,3,4]
list2=[5,6,7,8,4]

if len(set(list1) & set(list2)) == 0:
    print("No common elements")
else:
    print("Common elements exist")