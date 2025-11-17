color=input("enter color: ")

match color:
    case "green":
        print("go")
    case "red":
        print("stop")
    case "yellow":
        print("get ready")
    case _:
        print("this isnt a trafic light color!!")