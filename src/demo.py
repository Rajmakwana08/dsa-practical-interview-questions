rows = 5

for i in range(1, rows + 1):
    for j in range(65, 65 + i):  # ASCII value of 'A' is 65
        print(chr(j), end='')
    print()
