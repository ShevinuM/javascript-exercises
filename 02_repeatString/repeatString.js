const repeatString = function(stringToRepeat, noOfTimes) {
    if (noOfTimes < 0) { return "ERROR"; }
    return stringToRepeat.repeat(noOfTimes);
};

// Do not edit below this line
module.exports = repeatString;
