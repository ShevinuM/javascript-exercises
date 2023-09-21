const fibonacci = function(goal) {
    if (goal < 0) { return "OOPS"; }
    let arr = [1, 1]
    for (let i=2; i<=goal; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[goal-1];
};

// Do not edit below this line
module.exports = fibonacci;
