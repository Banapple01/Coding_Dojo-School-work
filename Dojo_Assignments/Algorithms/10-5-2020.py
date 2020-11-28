list = [1,3,5,4,6,2,3,5,67,32,43]

def Print1To255():
    for i in range(1, 256):
        print(i)
#Print1To255()

# 2. Print Odds 1-255
def PrintOdds1To255():
    for i in range(1, 256):
        if i % 2 != 0:
            print(i)
    return
# Print all odd integers from 1 to 255. 

# 3. Print Ints and Sum 0-255
def PrintIntsAndSum0To255():
    sum = 0
    for i in range(1, 256):
        print(i)
        sum += i 
    print(sum)
    
# Print integers from 0 to 255, and with each integer print the sum so far. 


# 4. Iterate and Print Array
# Iterate through a given array, printing each value. 
# PrintArrayVals(arr)
def iterateAndPrint(li):
    for i in li:
        print(i)

iterateAndPrint([2,342,1,34,3])


# 5. Find and Print Max
# PrintMaxOfArray(arr)
# Given an array, find and print its largest element. 
def max(list):
    max = 0
    for i in range(len(list)):
        if list[i] > max:
            max = list[i]
    return max


# 6. Get and Print Average
# PrintAverageOfArray(arr)
# Analyze an array’s values and print the average. 
def PrintAverageOfArray(list):
    total = 0
    for i in range(len(list)):
        total += list[i]
    return total / len(list)

# 7. Array with Odds
def ReturnOddsArray1To255():
    arr = []
    j = 0
    for i in range(1,256):
        if i % 2 != 0:
            arr[j] = i
        j+=1
    return arr
# Create an array with all the odd integers between 1 and 255 (inclusive).  


# 8. Square the Values
# SquareArrayVals(arr)
# Square each value in a given array, returning that same array with changed values. 
def squareVals(li):
    for i in range(0, len(li)):
        li[i] = li[i] * 2
    return li
print(squareVals([2,4,1,64]))

# 9. Greater than Y
def ReturnArrayCountGreaterThanY(arr, y):
    counter = 0
    for i in arr:
        if i > y:
            counter+=1
            print(counter)
# Given an array and a value Y, count and print the number of array values greater than Y. 

# 10. Zero Out Negative Numbers
# ZeroOutArrayNegativeVals(arr)
# Return the given array, after setting any negative values to zero. 
def zeroout(list):
    for i in range(len(list)):
        if list[i] < 0:
            list[i] == 0
    return list
#zeroout[-1,23,4,-6,-3,29]
# 
# 11. Max, Min, Average
# PrintMaxMinAverageArrayVals(arr)
# Given an array, print the max, min and average values for that array
def minMaxAvg(li):
    sum = 0
    min = li[0]
    max = li[0]
    for i in range(1, len(li)):
        sum = sum + li[i]
        if li[i] > max:
            max = li[i]
        elif li[i] < min:
            min = li[i]
    avg = sum / len(li)
    return [max, min, avg]

print(minMaxAvg([3,12,-3,23,3]))
        


# 12. Shift Array Values
def ShiftArrayValsLeft(list):
    list.pop(0)
    list.append(0)
    return list
# Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.


def ShiftArrayValsLeft(list):
    list.pop[0]
    list.append()
    return list    





# 13. Swap String For Array Negative Values
# SwapStringForArrayNegativeVals(arr)
# Given an array of numbers, replace any negative values with the string 'Dojo'.
def SwapStringForArrayNegativeVals(list):
    for i in range(len(list)):
        if list[i] < 0:
            list[i] = 'Dojo'
    return list
    