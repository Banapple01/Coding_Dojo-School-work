
# String Encode

# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character,
# then the number of times it appears. 

# If there is only 1 count of a character, just add that character and not the number

# Input: "aaabbccc"
# Output: "a3b2c3"

# Input: "abbbdde"
# Output: "ab3d2e"

def stringEncode(my_string):
    counter = 1
    encoded = ""
    for i in range(0, len(my_string),1):
        if i != len(my_string)-1 and my_string[i] == my_string[i+1]:
            counter += 1
        elif i != len(my_string)-1 and counter > 1 and my_string[i] != my_string[i+1]:
            encoded += my_string[i] + str(counter)
            counter = 1
        else:
            if counter == 1:
                encoded += my_string[i]
            else:
                encoded += my_string[i] + str(counter)
        
    return encoded

#print(stringEncode("aaabbacddee"))



# String Decode

# Given a encoded string, decode it!

def string_decode(my_string):
    decode = ""
    for i in range(0, len(my_string),1):
        if i+1 < len(my_string):
            if my_string[i+1].isdigit():
                decode += (my_string[i] * int(my_string[i+1]))
                i+=1
            else:
                if not my_string[i].isdigit():
                    decode += my_string[i]
        else:
            if my_string[i].isdigit():
                return decode
            decode += my_string[i]
    return decode

#print(string_decode("4a4eb2c3y"))

# Input: "a3b2c3"
# Output: "aaabbccc"