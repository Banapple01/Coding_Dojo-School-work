# Given a string,
# return a new string with the duplicates excluded
# Bonus: Keep only the last instance of each character.

# Input: "abcABC"
# Output: "abcABC"

# Input: "helloo"
# Output: "helo"


def unduplicate(input):
    characters = {}
    new_string = ""
    for i in range(len(input)-1,-1,-1):
        if input[i] not in characters:
            characters[input[i]] = 1
            new_string += input[i]
    return new_string[::-1]


unduplicate("ohelloo")

# Given a string containing space separated words
# Reverse each word in the string.
# If you need to, use .split to start, then try to do it without.

# Input: "hello"
# Output: "olleh"

# Input: "hello world"
# Output: "olleh dlrow"

# Input: "abc def ghi"
# Output: "cba fed ihg"

def reverse(string):
    string += " "
    a_list = []
    new_string = ""
    for i in string:
        if i != " " and i != string[len(string)-1]:
            new_string += i
        else:
            a_list.append(new_string[::-1])
            new_string = ""
    new_string = " ".join(a_list)
    return new_string

reverse("hello world")