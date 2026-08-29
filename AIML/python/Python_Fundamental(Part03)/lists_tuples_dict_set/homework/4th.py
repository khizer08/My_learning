tuple1=(1,2,3,4,5,6,7,8,9,10)
even_tuple=()
even_tuple_list=list(even_tuple)
odd_tuple=()
odd_tuple_list=list(odd_tuple)
for i in range (len(tuple1)):
    if tuple1[i]%2==0:
        even_tuple_list.append(tuple1[i])
    else:
        odd_tuple_list.append(tuple1[i])
        
print(tuple(even_tuple_list))
print(tuple(odd_tuple_list))