
# Given an array of integers
# return the first integer from the array that is not repeated anywhere else
# If there are multiple non-repeated integers in the array,
# the "first" one will be the one with the lowest index.


# Input: [3, 5, 4, 3, 4, 6, 5]
# Output: 6

# Input: [3, 5, 5]
# Output: 3

# Input: [3, 3, 5]
# Output: 5

def first_int(my_list):
    counter = 0
    for i in my_list:
        for j in my_list:
            if i == j:
                counter+=1
        if counter == 1:
            return i
        counter = 0
    return 'all multiples'

#print(first_int([3, 5, 4, 3, 4, 6, 5]))

#print(int (51 / 25))


# Given an int to represent how much change is needed
# calculate the fewest number of coins needed to create that change,
# using the standard US denominations

# Input: 25
# Output: { "quarter": 1 }

# Input: 50
# Output: { "quarter": 2 }

# Input: 9
# Output: { "nickel": 1, "penny": 4 }

# Input: 99
# Output: { "quarter": 3, "dime": 2, "penny": 4 }

returnDict= {
    "quarter" : 0,
    "dime" : 0,
    "nickel" : 0,
    "penny" : 0
}

coinDict= {
    "q" : 25,
    "d" : 10,
    "n" : 5,
    "p" : 1
}

def calculate(coinvalue):
    num = int(coinvalue / coinDict['q'])
    change = (coinvalue % coinDict['q'])
    returnDict['quarter'] = num 
    if change == 0:
        return returnDict
    elif 25 > change > 0 :
        num = int(change / coinDict['d'])
        change = (change % coinDict['d'])
        returnDict['dime'] = num 
        if change == 0:
            return returnDict
        elif 10 > change > 0:
            num = int(change / coinDict['n'])
            change = (change % coinDict['n'])
            returnDict['nickel'] = num 
            if change == 0:
                return returnDict
            elif 5 > change > 0:
                num = int(change / coinDict['p'])
                change = (change % coinDict['p'])
                returnDict['penny'] = num 
                if change == 0:
                    return returnDict

print(calculate(99))