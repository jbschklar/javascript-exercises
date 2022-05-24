const add = function () {
	return Array.from(arguments).reduce((total, argument) => {
		total = total + argument;
		return total;
	}, 0);
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
	return Math.pow(a, b);
};

// const factorial = function (num) {
// 	if (num < 0) return -1;
// 	if (num === 0 || num === 1) return 1;
// 	return num * factorial(num - 1);
// };

const factorial = function (num) {
	let sum = 1;
	for (let i = num; i > 0; i--) {
		sum = sum * i;
	}
	return sum;
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
