const fibonacci = function (num) {
	if (+num < 0) return "OOPS";
	let fibArr = [];
	let a, b;
	for (let i = 0; i <= +num; i++) {
		a = fibArr[i - 1];
		b = fibArr[i - 2];
		fibArr.push((a ? a : 1) + (b ? b : 0));
	}
	return fibArr[+num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
