class BankAccount:
    def __init__(self,name,id,balance):
        self.name=name #public attribute
        self._id=id #protected attribute
        self.__balance=balance #private attribute
    
    def get_balance(self): #getter (Because we need to access private attribute)
        return self.__balance
    
    def set_balance(self,newBalance): #setter (Setting new value to private attribute)
        self.__balance=newBalance
        
acc1=BankAccount("Syed khizer",1122,100_000)

acc1.set_balance(200_000)
print(acc1.name,acc1._id,acc1.get_balance())


# This is wrong as it is not the way to access the "private attribute",
# it does not throw error but we should not do it.
print(acc1.name,acc1._id,acc1._BankAccount__balance) 