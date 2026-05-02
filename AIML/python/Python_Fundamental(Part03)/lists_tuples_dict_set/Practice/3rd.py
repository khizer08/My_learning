list1_size=int(input("Enter the size of list 1: "))
list1=[]
for i in range(list1_size):
    val=int(input("Enter the values: "))
    list1.append(val)

list2_size=int(input("Enter the size of list 2: "))
list2=[]
for i in range(list2_size):
    val=int(input("Enter the values: "))
    list2.append(val)

new_list=list1+list2
print(new_list)

new_list.sort()
print(new_list)