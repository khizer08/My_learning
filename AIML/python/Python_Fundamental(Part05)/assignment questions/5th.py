try:
    with open ("data.txt","r") as f:
        data=f.read()
    print(data)
    
except:
    print("File not found!")
        