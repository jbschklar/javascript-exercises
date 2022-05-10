const sumAll = function (firstNum, lastNum) {
	let sum = 0;
	if (
		firstNum < 0 ||
		lastNum < 0 ||
		typeof firstNum !== "number" ||
		typeof lastNum !== "number"
	)
		return "ERROR";
	x = firstNum < lastNum ? firstNum : lastNum;
	y = lastNum > firstNum ? lastNum : firstNum;

	for (let i = x; i <= y; i++) {
		sum = sum + i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
