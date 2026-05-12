data=True
line_no=1
word=input("Enter the word: ")
with open("sample.txt","r") as f:
    while data:
        data=f.readline()
        if(word in data):
            print(f"{word} found at line: {line_no}")
            break
        line_no+=1