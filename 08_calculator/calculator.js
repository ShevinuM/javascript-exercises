const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (nums) {
	return nums.reduce((acc, num) => num * acc, 1);
};

const power = function (num1, num2) {
	return num1 ** num2;
};

const factorial = function (num1) {

	let res = num1;
	for (let i = num1 - 1; i > 0; i--) {
		res = res * i;
	}
	return num1 !== 0 ? res : 1;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
