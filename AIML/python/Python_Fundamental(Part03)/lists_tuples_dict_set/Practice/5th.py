dict1={
    "khizer":84,
    "syed":94,
    "owaise":95,
    "rahul":99,
    "reema":65
}

def add_stud():
    name=input("Enter the student name: ")
    marks=int(input("Enter the marks: "))
    dict1.update({name:marks})
    print(dict1)
    
def update_marks():
    name=input("Enter the name of student you want to update marks: ")
    if name in dict1:
        new_marks=int(input("Enter the marks: "))
        dict1[name]=new_marks
        print(dict1)
    else:
        print("No student found")   
        
def search_stud():
    name=input("Enter the name: ")
    if name in dict1:
        print(dict1.get(name))
    else:
        print("No such student") 

def display_stud():
    print(dict1)
    
user_input=input(" A- To Add Student\n B- To Update Marks\n C- Search a Student\n D- Display All Students\n Enter Your Choice: ")

match(user_input):
    case "A":
        add_stud()
    case "B":
        update_marks()
    case "C":
        search_stud()
    case "D":
        display_stud()
    case _:
        print("Invalid input!!")
