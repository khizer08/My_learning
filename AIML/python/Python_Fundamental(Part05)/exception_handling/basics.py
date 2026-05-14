try:
    num=input("Enter the number: ")
    result=10/int(num)
except (ZeroDivisionError , ValueError):
    print("Either denominator is zero or input isn't an integer.")
else:
    print(f"The result is: {result}")
finally:
    print("End of program....")