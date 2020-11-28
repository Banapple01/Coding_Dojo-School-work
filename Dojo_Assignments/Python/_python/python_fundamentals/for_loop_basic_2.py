import math
def biggie_size(my_list):
    for i in range(len(my_list)):
        if my_list[i] >= 0:
            my_list[i] = "big"
    return my_list
#print(biggie_size([1,-2,3,4,-5]))

def count_positives(my_list):
    end = len(my_list)-1
    counter = 0
    for i in range(len(my_list)):
        if my_list[i] > 0:
            counter+=1
    my_list[end] = counter
    return my_list

#print(count_positives([1,2,3,4,-1,-2,-3]))

def sum_total(my_list):
    sum = 0
    for i in range(len(my_list)):
        sum += my_list[i]
    return sum

#print(sum_total([1,2,3,4,5,-2]))

def average(my_list):
    sum = 0
    for i in range(len(my_list)):
        sum += my_list[i]
    average = sum/len(my_list)
    return average

#print(average([1,2,3,4,5,-5]))

def length(my_list):
    return len(my_list)

#print(length([1,1,1,1,1,1,1]))

def minimum(my_list):
    min = my_list[0]
    for i in range(len(my_list)):
        if min > my_list[i]:
            min = my_list[i]
    return min

#print(minimum([1,3,4,8,9,-1]))

def maximum(my_list):
    max = my_list[0]
    for i in range(len(my_list)):
        if max < my_list[i]:
            max = my_list[i]
    return max

#print(maximum([1,3,4,8,9,-1]))

object = {'sumTotal': "", 'average': "", 'minimum': "", 'maximum': "", 'length': ""}
def ultimate_analysis(my_list):
    sum = 0
    for i in range(len(my_list)):
        sum += my_list[i]
    object['sumTotal'] = sum

    for i in range(len(my_list)):
        sum += my_list[i]
    average = sum/len(my_list)
    object['average'] = average
    
    min = my_list[0]
    for i in range(len(my_list)):
        if min > my_list[i]:
            min = my_list[i]
    object['minimum'] = min

    max = my_list[0]
    for i in range(len(my_list)):
        if max < my_list[i]:
            max = my_list[i]
    object['maximum'] = max

    object['length'] = len(my_list)

#ultimate_analysis([1,45,3,8,6])
#print(object)

def reverse_list(my_list):
    for i in range(math.floor(len(my_list)/2)):
        temp = my_list[i]
        my_list[i] = my_list[len(my_list) - 1 - i]
        my_list[len(my_list) - 1 - i] = temp
    return my_list

#print(reverse_list([1,2,3,4,5]))