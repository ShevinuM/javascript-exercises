const palindromes = function (phrase) {
    let phrase_arr = phrase.split('');
    phrase_arr = phrase_arr.filter(character => /^[A-Za-z0-9]$/.test(character) === true);
    let left = 0;
    let right = phrase_arr.length - 1;
    while (left <= right) {
        if (phrase_arr[left] != phrase_arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
