num=int(input("enter the number: "))

def fact(num):
    facto=1
    for i in range(1,num+1):
        facto=facto*i
    return facto

print(fact(num))



