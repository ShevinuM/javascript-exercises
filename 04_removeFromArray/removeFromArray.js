const removeFromArray = function(array, ...values) {
    for (let valueToRemove of values) {
        array = array.filter(value => value !== valueToRemove);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
