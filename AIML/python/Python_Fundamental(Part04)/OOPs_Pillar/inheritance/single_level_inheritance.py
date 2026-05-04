class Employee: #parent
    start_time="10am"
    end_time="5pm"
    
class Teacher(Employee): #child
    def __init__(self,subject):
        self.subject=subject
        
class Admin(Employee): #child
    def __init__(self,role):
        self.role=role
        
        
t1=Teacher("Maths")
print(t1.subject,t1.start_time,t1.end_time)

a1=Admin("Manager")
print(a1.role,a1.start_time,a1.end_time)   