class Student:
    college_name="Reva university" #class attribute
    
    def __init__(self,name,age):
        self.name=name # instance attribute
        self.age=age
        
stud1=Student("khizer",22)
stud2=Student("syed",23)

print(stud1.name,stud1.age,Student.college_name)
print(stud2.name,stud2.age,Student.college_name)