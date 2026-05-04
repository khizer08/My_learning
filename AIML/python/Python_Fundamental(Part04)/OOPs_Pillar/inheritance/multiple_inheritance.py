class Teacher:
    def __init__(self,salary):
        self.salary=salary
        
class Student:
    def __init__(self,gpa):
        self.gpa=gpa
        
class TA(Teacher,Student):
    def __init__(self,salary,gpa,name):
        self.name=name
        super().__init__(salary)
        Student.__init__(self,gpa)
        
ta1=TA(25_000,9.3,"Khizer")
print(ta1.salary,ta1.gpa,ta1.name)


        