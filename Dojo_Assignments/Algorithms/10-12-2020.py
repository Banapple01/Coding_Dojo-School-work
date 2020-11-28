
# An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.
# Is there a quick way to determine if they aren't an anagram before spending more time?
# Given two strings
# return whether or not they are anagrams

# Input: "yes", "eys"          "soon", "noso"
# Output: True

# Input: "yes", "eYs"
# Output: True

# Input: "no", "noo"
# Output: False

def anagram_1(one_str, two_str):      # wont work on words like soon
    if len(one_str) != len(two_str):
        return False
    else:
        for i in one_str:
            counter = 0
            for j in two_str:
                if i == j:
                    counter += 1 
                    if counter > 1:
                        return False
        return True

#print(anagram_1('yes', 'eYs'))


def anagram(string1, string2):
    if len(string1) != len(string2):
        return False
    else:
        list1 = list(string1.lower())
        list2 = list(string2.lower())
        list1.sort()
        list2.sort()
        if list1 == list2:
            return True
        else:
            return False

print(anagram('soon', 'OnSo'))
