from abc import ABC,abstractmethod

class Animal(ABC): # abstract class 
    @abstractmethod
    def make_sound(self): # abstract method
        pass
    
class Lion(Animal):
    def make_sound(self):
        print("Roar!")
        
        
class Cow(Animal):
    def make_sound(self):
        print("Moo!")
        
l1=Lion()
l1.make_sound()

c1=Cow()
c1.make_sound()