# Given a string that may have extra spaces at the start and the end,
# return a new string that has the extra spaces at the start and the end trimmed (removed)
# do not remove any other spaces.

# Input: "   hello world     "
# Output: "hello world"

# remove spaces at beginning and end
# loop through and add to new string
# at start if its a " " don't add
# add when character found

def extra(string):
    string += " "
    a_list = []
    new_string = ""
    for i in string:
        if i != " " and i != string[len(string)-1]:
            new_string += i
        elif new_string != "":
            a_list.append(new_string)
            new_string = ""
    new_string = " ".join(a_list)
    print(new_string)
    return new_string

""" extra("    hello world    ")
extra("hello world    ")
extra("  he ll o world ")
extra("     hello world") """

# v2 

def extras(string):
    a_list = string.split()
    new_string = " ".join(a_list)
    return new_string

print(extras("    hello world    "))
print(extras("hello world    "))
print(extras("  he ll o world "))
print(extras("     hello world"))


# Reverse Word Order
# Given a string of words (with spaces)
# return a new string with words in reverse sequence.


# Input: "This is a test"
# Output: "test a is This"

def rWordOrder(string):
    string += " "
    a_list = []
    new_string = ""
    for i in string:
        if i != " " and i != string[len(string)-1]:
            new_string += i
        elif new_string != "":
            a_list.append(new_string)
            new_string = ""
        a_list.reverse()
    new_string = " ".join(a_list)
    print(new_string)
    return new_string

""" rWordOrder("    hello world    ")
rWordOrder("hello world    ")
rWordOrder("  he ll o world ")
rWordOrder("     hello world") """

def reverse_order(string):
    string += " "
    new_string = ''
    a_list = []
    for i in string:
        if i != ' ' and i != string[len(string) - 1]:
            new_string += i
        elif new_string != "":
            a_list.append(new_string)
            new_string = ""
    res = " ".join(reversed(a_list))
    return res

print(reverse_order('   This  is a    test    '))

# v2

def reversed_order(string):
    return " ".join(reversed(string.split()))

#print(reverse_order('   This  is a    test    '))