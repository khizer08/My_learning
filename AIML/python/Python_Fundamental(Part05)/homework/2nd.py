with open("log.txt","a") as f:
    f.write("program ran successfully ")
    
with open("log.txt","r") as f:
    output=f.read()
    print(output)