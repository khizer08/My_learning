class Laptop:
    storage_type="ssd"
    
    def __init__(self,RAM,storage): #constructor
        self.RAM=RAM
        self.storage=storage
        
    @classmethod
    def get_storage_type(cls): #class method
        print(f"storage type= {cls.storage_type}")
        
    def get_info(self): # instance method
        print(f"Laptop has {self.RAM} RAM and {self.storage} {self.storage_type}")
        
    @staticmethod
    def cal_discount(price,discount):
        final_price=price-(discount*price/100)
        print(f"discounted price= {final_price}")
        
l1=Laptop("16gb","512gb")
l1.cal_discount(40_000,10)