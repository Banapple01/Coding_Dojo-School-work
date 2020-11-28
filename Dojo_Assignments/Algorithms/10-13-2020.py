import math
# Binary Search
# Given a sorted list of integers and a number, return a boolean
# if that number exists inside the list.
# Do not use a for loop to iterate over the entire list.

# Input: [1, 2, 3, 4, 5], 5
# Output: True

# Input: [2, 4, 6, 8], 9
# Output: False

# get middle value
# evaluate if < > =
# if not = 

def binary_search(some_li, num):
    # covering if number is not in list
    if num == some_li[len(some_li)-1] or num == some_li[0]:
        return True
    # check if num is greater than value at middle index
    elif some_li[math.ceil(len(some_li) / 2)] < num:
        print('It was in the top half')
        # call function on top half of list
        return binary_search(some_li[math.ceil(len(some_li) / 2) + 1: len(some_li) - 1], num)
    # Check if num is less than value at middle index
    elif some_li[math.ceil(len(some_li) / 2)] > num:
        print('It was in the bottom half')
        #call function on bottom half of list
        return binary_search(some_li[0: math.ceil(len(some_li) / 2) - 1], num)
    # if num is not greater than or less than middle value it is middle value
    else:
        return True
my_list = [1,2,3,4,5,6,7,8,9,10]

print(binary_search(my_list, 7)) #8,5,2