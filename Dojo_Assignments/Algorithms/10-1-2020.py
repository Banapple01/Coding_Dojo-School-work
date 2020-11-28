palipal = "racecar" # should return True

palipal2 = "Madame, I'm Adam" # should return False

def palindrome(my_string):
    new_string = ""
    temp = my_string
    if type(temp) == int:
        temp = str(my_string)
        print(temp)
    for i in range(len(temp)-1,-1,-1):
        new_string += temp[i]
    if new_string == temp:
        print(new_string)
        return True
    else: 
        print(new_string)
        return False

word = "A B C b A"
word2 = "A B C B A"
word3 = 323
print(palindrome(word3))