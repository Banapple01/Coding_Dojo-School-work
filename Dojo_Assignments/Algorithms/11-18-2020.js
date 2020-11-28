function canStrBecomePalindrome(str) {
    let freq = {};
    return [...str].filter(char => {
        freq[char], 
        returnVal = freq[char] ? 
        (freq[char] = freq[char] + 1, console.log(freq[char] + 1), returnVal = false) 
        : (freq[char] = 1, returnVal = true);
        return returnVal;
    }).filter(char => freq[char] % 2 == 1).length <= 1;
}

// console.log(canStrBecomePalindrome('tacocat'));

function canStrBecomePalindrome2(str) {
    let new_string = '';
    for(var i = str.length -1; i >= 0; i--) {
        new_string += str[i];
    }
    console.log(new_string);
    if(new_string == str) {
        return true;
    }else {
        return false;
    }
}

// console.log(canStrBecomePalindrome2('tacocat'));