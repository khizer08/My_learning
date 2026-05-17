import nltk
from nltk.tokenize import word_tokenize
text = "dog cat dog fish cat dog"

words = word_tokenize(text)

freq = {}

for word in words:
    if word in freq:
        freq[word] += 1
    else:
        freq[word] = 1
print(freq)