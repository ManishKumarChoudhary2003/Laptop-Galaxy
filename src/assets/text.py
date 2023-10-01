with open("flipkart_laptops.csv", "r") as f:
    head = f.readline().split(",")
    l = f.readline()
    arr = []
    while l:
        a = l.split(",")
        arr.append(a)
        l = f.readline()
print(arr)
print(head)
with open("laptops_data.json", "w") as f:
    f.write('[')
    for j in enumerate(arr):
        a = "{"
        for i in range(len(head)):
            try:
                if i == len(head)-1:
                    a = a+f' "{head[i][:-1]}" : {float(j[1][i][:-1])} '
                else:
                    a = a+f' "{head[i]}" : {float(j[1][i])} ,'
            except:
                if i == len(head)-1:
                    a = a+f' "{head[i][:-1]}" : "{j[1][i][:-1]}" '
                else:
                    a = a+f' "{head[i]}" : "{j[1][i]}" ,'
        if j[0] == len(arr)-1:
            a = a+" }\n"
        else:
            a = a+" },\n"
        f.write(a)
f.write("]")