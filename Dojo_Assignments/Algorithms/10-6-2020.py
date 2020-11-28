def frequency_table(sample_list):
    output = {}
    for i in sample_list:
        if i not in output:
            output[i] = 1
        else:
            output[i] += 1
    return output

print(frequency_table(["a", "b", "a", "c", "B", "c", "c", "d"]))

# Given an list of strings
# return a sum to represent how many times each list item is found (a frequency table)

# Input: ["a", "a", "a"]
# Output: {
#   a: 3,
# }

# Input: ["a", "b", "a", "c", "B", "c", "c", "d"]
# Output: {
#   a: 2,
#   b: 1,
#   c: 3,
#   B: 1,
#   d: 1,
# }