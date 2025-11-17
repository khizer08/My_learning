#counting the number of "i" in the "word".
word="artificial intelligence"
count=0
for i in word:
    if i=="i":
        count+=1
print(count)

#counting the vowels 
word="artificial intelligence"
count=0
for ch in word:
    if ch=="a" or ch=="e" or ch=="i" or ch=="o" or ch=="u":
        count+=1
print(count)
