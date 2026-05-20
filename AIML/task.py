documents = [
    "The brown fox jumps over the lazy dog",
    "The quick brown dog outran the lazy fox",
    "The dog is lazy and the fox is quick"
]

processed_docs = [doc.lower().split() for doc in documents]

inverted_index = {}

for doc_id, doc in enumerate(processed_docs):
    for word in doc:
        if word not in inverted_index:
            inverted_index[word] = []
        inverted_index[word].append(doc_id)

print(inverted_index)