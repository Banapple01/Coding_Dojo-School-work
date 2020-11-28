def countdown(num):
    arr = []
    if num > 0:
        for i in range(num, -1, -1):
            arr.append(i)
    return arr

#print(countdown(5))

def p_and_r(my_list):
    print(my_list[0])
    return my_list[1]

#print(p_and_r([5,3]))

def values_greater_than_second(my_list):
    if len(my_list) < 2:
        return False
    second = my_list[1]
    new_arr = []
    for i in my_list:
        if i > second:
            new_arr.append(i)
    return new_arr

#print(values_greater_than_second([4,3,6,8,2]))

def this_length_that_value(int1, int2):
    new_list = []
    for i in range(int1):
        new_list.append(int2)
    return new_list

#print(this_length_that_value(3,5))