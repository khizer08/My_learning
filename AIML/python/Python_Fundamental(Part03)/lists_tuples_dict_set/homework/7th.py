str=input("Enter a string: ")
count=0
for i in range(len(str)):
    if str[i]==" ":
        count=count+1
print("Total number of spaces: ",count)