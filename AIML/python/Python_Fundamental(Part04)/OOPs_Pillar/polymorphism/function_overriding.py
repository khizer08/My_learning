class Employee:
    def get_designation(self):
        print("The designation is: Employee")
        
class Teacher(Employee):
    def get_designation(self): # "same method name , this overrides the parent class method"
        print("The designation is: Teacher")
        
t1=Teacher()
t1.get_designation()