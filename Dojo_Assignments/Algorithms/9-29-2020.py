import math
# String - Reverse
# Given a string, reverse the string and return the reversed string

# Input: "Horsey"
# Output: "yesroH"

# Input: "Horsey Sauce"
# Output: "ecuaS yesroH"

word = "Stringy"


""" for char in my_string:
    print(char)

for i in range(len(string), -1, -1):
    print(i)
"""
def reverse_list(my_string):
    new_string = ""
    for i in range(len(my_string)-1,-1,-1):
        new_string += my_string[i]
    return new_string

print(reverse_list(word))

""" str = "Python" # initial string
reversedString=[]
index = len(str) # calculate length of string and save in index
while index > 0: 
    reversedString += str[ index - 1 ] # save the value of str[index-1] in reverseString
    index = index - 1 # decrement index
print(reversedString) # reversed string """
